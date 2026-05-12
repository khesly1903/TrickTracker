import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FilterContactDto } from './dto/filter-contact.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { EnrollmentIdService } from '../common/services/enrollment-id.service';
import { ContactTypes } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ContactsService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly enrollmentIdService: EnrollmentIdService,
  ) {}

  async create(createContactDto: CreateContactDto, academyId: string) {
    const { email, password, roles, userId, enrollmentId: customEnrollmentSequence, ...contactData } = createContactDto;

    return this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

      const academy = await prisma.academy.findUnique({
        where: { id: academyId },
        select: { seqNumber: true },
      });
      if (!academy?.seqNumber) {
        throw new InternalServerErrorException('Academy enrollment ID not initialized.');
      }

      const loginId = await this.enrollmentIdService.generate(
        prisma,
        academyId,
        academy.seqNumber,
        customEnrollmentSequence,
      );

      if (email) {
        const existingContact = await prisma.contact.findFirst({
          where: { academyId, isActive: true, user: { email } },
        });
        if (existingContact) throw new ConflictException('A contact with this email already exists in this academy.');

        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        const newUser = await prisma.user.create({
          data: { email, loginId, passwordHash: hashedPassword, roles: roles || ['PARENT'] },
        });
        finalUserId = newUser.id;
      } else if (userId) {
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) throw new ConflictException('A user with this ID does not exist in the system.');

        const existingContact = await prisma.contact.findUnique({ where: { userId } });
        if (existingContact) throw new ConflictException('This user already has a contact profile.');

        if (!existingUser.loginId) {
          await prisma.user.update({ where: { id: userId }, data: { loginId } });
        }
      } else {
        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        const newUser = await prisma.user.create({
          data: { loginId, passwordHash: hashedPassword, roles: roles || ['PARENT'] },
        });
        finalUserId = newUser.id;
      }

      const contact = (await prisma.contact.create({
        data: {
          ...contactData,
          type: [ContactTypes.PARENT],
          userId: finalUserId || null,
          academyId,
          enrollmentId: loginId,
        },
        include: { user: true },
      })) as any;

      const { user, ...rest } = contact;
      return { ...rest, email: user?.email ?? rest.email ?? null, loginId: user?.loginId ?? null };
    });
  }

  async filter(filterDto: FilterContactDto, academyId: string) {
    const { fullname, email } = filterDto;

    const where: any = { isActive: true, academyId };
    const conditions: any[] = [];

    if (fullname) {
      conditions.push(
        { name: { contains: fullname, mode: 'insensitive' } },
        { surname: { contains: fullname, mode: 'insensitive' } },
      );
    }

    if (email) {
      conditions.push(
        { email: { equals: email, mode: 'insensitive' } },
        { user: { email: { equals: email, mode: 'insensitive' } } },
      );
    }

    if (conditions.length > 0) where.OR = conditions;

    const contacts = await this.prisma.contact.findMany({
      where,
      include: { user: true, studentContacts: true },
    });

    return contacts.map((contact) => {
      const { user, ...rest } = contact;
      return { ...rest, email: user?.email || rest.email || null };
    });
  }

  async findAll(paginationQuery: PaginationQueryDto, academyId: string) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const where: any = { isActive: true, academyId };

    const [total, contacts] = await Promise.all([
      this.prisma.contact.count({ where }),
      this.prisma.contact.findMany({
        where,
        skip,
        take: limit,
        include: { user: true, studentContacts: true },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const lastPage = Math.ceil(total / limit);

    return {
      data: contacts.map((contact) => {
        const { user, ...rest } = contact;
        return { ...rest, email: user?.email || rest.email || null };
      }),
      meta: { total, page, lastPage, limit },
    };
  }

  async findOne(id: string, academyId: string) {
    const contact = await this.prisma.contact.findFirst({
      where: {
        OR: [{ id }, { userId: id }],
        academyId,
      },
      include: {
        user: true,
        studentContacts: {
          include: { student: { select: { id: true, name: true, surname: true, isActive: true } } },
        },
      },
    });

    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, academyId: string) {
    const existingContact = await this.findOne(id, academyId);

    return this.prisma.contact.update({
      where: { id: existingContact.id },
      data: {
        name: updateContactDto.name,
        surname: updateContactDto.surname,
        phoneNumber: updateContactDto.phoneNumber,
        secondaryPhoneNumber: updateContactDto.secondaryPhoneNumber,
        whatsappPhoneNumber: updateContactDto.whatsappPhoneNumber,
        userId: updateContactDto.userId,
      },
    });
  }

  async remove(id: string, academyId: string) {
    const existingContact = await this.findOne(id, academyId);

    return this.prisma.contact.update({
      where: { id: existingContact.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existingContact = await this.findOne(id, academyId);

    return this.prisma.contact.delete({
      where: { id: existingContact.id },
    });
  }
}
