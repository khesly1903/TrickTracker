import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

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
    const existingUser = await this.prisma.user.findUnique({
      where: { id: createContactDto.userId },
    });

    if (!existingUser) {
      throw new ConflictException(
        'A user with this ID does not exist in the system.',
      );
    }

    const existingContact = await this.prisma.contact.findUnique({
      where: { userId: createContactDto.userId },
    });

    if (existingContact) {
      throw new ConflictException('This user already has a contact profile.');
    }

    const newContactProfile = await this.prisma.contact.create({
      data: {
        userId: createContactDto.userId,
        name: createContactDto.name,
        surname: createContactDto.surname,
        type: createContactDto.type,
        phoneNumber: createContactDto.phoneNumber,
        secondaryPhoneNumber: createContactDto.secondaryPhoneNumber,
        whatsappPhoneNumber: createContactDto.whatsappPhoneNumber,
      },
    });

    return newContactProfile;
  }

  /**
   * Retrieves all contacts in the system.
   * @returns A list of contacts with associated user and student connections.
   */
  async findAll() {
    return this.prisma.contact.findMany({
      where: {
        isActive: true,
      },
      include: {
        user: true,
        studentContacts: true,
      },
    });
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

    return this.prisma.contact.update({
      where: { id: existingContact.id },
      data: {
        name: updateContactDto.name,
        surname: updateContactDto.surname,
        type: updateContactDto.type,
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
