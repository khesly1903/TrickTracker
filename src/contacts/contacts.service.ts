import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FilterContactDto } from './dto/filter-contact.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ContactTypes } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Creates a new contact profile linked to an existing user.
   * @param createContactDto Data to create the contact.
   * @returns The created contact profile.
   * @throws ConflictException if user not found or contact already exists.
   */
  async create(createContactDto: CreateContactDto) {
    const { email, password, roles, userId, ...contactData } = createContactDto;

    return this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

      if (email) {
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          throw new ConflictException('A user with this email already exists.');
        }

        const saltRounds = 10;
        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, saltRounds);

        const newUser = await prisma.user.create({
          data: {
            email,
            passwordHash: hashedPassword,
            roles: roles || ['PARENT'],
          },
        });
        finalUserId = newUser.id;
      } else if (userId) {
        const existingUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (!existingUser) {
          throw new ConflictException(
            'A user with this ID does not exist in the system.',
          );
        }

        const existingContact = await prisma.contact.findUnique({
          where: { userId },
        });

        if (existingContact) {
          throw new ConflictException(
            'This user already has a contact profile.',
          );
        }
      }

      const contact = (await prisma.contact.create({
        data: {
          ...contactData,
          type: contactData.type || [ContactTypes.PARENT],
          userId: finalUserId || null,
        },
        include: { user: true },
      })) as any;

      const { user, ...rest } = contact;
      return {
        ...rest,
        email: user?.email || null,
      };
    });
  }

  /**
   * Filters contacts by name or surname.
   * @param filterDto Contains the fullname filter.
   * @returns A list of filtered contacts.
   */
  async filter(filterDto: FilterContactDto) {
    const { fullname, email } = filterDto;

    const where: any = {
      isActive: true,
    };

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

    if (conditions.length > 0) {
      where.OR = conditions;
    }

    const contacts = await this.prisma.contact.findMany({
      where,
      include: {
        user: true,
      },
    });

    return contacts.map((contact) => {
      const { user, ...rest } = contact;
      return {
        ...rest,
        email: user?.email || null,
      };
    });
  }

  /**
   * Retrieves active contacts with pagination.
   * @param paginationQuery Page and limit for pagination.
   * @returns Paginated contacts and metadata.
   */
  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const where: any = {
      isActive: true,
    };

    const [total, contacts] = await Promise.all([
      this.prisma.contact.count({ where }),
      this.prisma.contact.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: true,
          studentContacts: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
    ]);

    const lastPage = Math.ceil(total / limit);

    return {
      data: contacts.map((contact) => {
        const { user, ...rest } = contact;
        return {
          ...rest,
          email: user?.email || null,
        };
      }),
      meta: {
        total,
        page,
        lastPage,
        limit,
      },
    };
  }

  /**
   * Finds a specific contact by their ID or associated User ID.
   * @param id The Contact ID or User ID.
   * @returns The contact record.
   * @throws NotFoundException if contact is not found.
   */
  async findOne(id: string) {
    const contact = await this.prisma.contact.findFirst({
      where: {
        OR: [{ id }, { userId: id }],
      },
      include: {
        user: true,
        studentContacts: true,
      },
    });

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    return contact;
  }

  /**
   * Updates an existing contact record.
   * @param id The contact ID.
   * @param updateContactDto Data to update.
   * @returns The updated contact.
   * @throws NotFoundException if contact is not found.
   */
  async update(id: string, updateContactDto: UpdateContactDto) {
    const existingContact = await this.findOne(id);

    // If new types are provided, merge them with existing ones and remove duplicates
    let finalTypes: ContactTypes[] = existingContact.type as ContactTypes[];
    if (updateContactDto.type) {
      finalTypes = Array.from(
        new Set([...finalTypes, ...updateContactDto.type]),
      ) as ContactTypes[];
    }

    return this.prisma.contact.update({
      where: { id: existingContact.id },
      data: {
        name: updateContactDto.name,
        surname: updateContactDto.surname,
        type: finalTypes,
        phoneNumber: updateContactDto.phoneNumber,
        secondaryPhoneNumber: updateContactDto.secondaryPhoneNumber,
        whatsappPhoneNumber: updateContactDto.whatsappPhoneNumber,
        userId: updateContactDto.userId,
      },
    });
  }

  /**
   * Soft-deletes a contact by setting isActive to false.
   * @param id The contact ID.
   * @returns The updated contact.
   * @throws NotFoundException if contact is not found.
   */
  async remove(id: string) {
    const existingContact = await this.findOne(id);

    return this.prisma.contact.update({
      where: { id: existingContact.id },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes a contact record.
   * @param id The contact ID.
   * @returns The deleted contact.
   * @throws NotFoundException if contact is not found.
   */
  async hardRemove(id: string) {
    const existingContact = await this.findOne(id);

    return this.prisma.contact.delete({
      where: { id: existingContact.id },
    });
  }
}
