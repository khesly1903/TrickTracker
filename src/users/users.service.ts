import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Finds a user by their unique ID.
   * @param id The user ID.
   * @returns The user record if found.
   * @throws NotFoundException if user is not found.
   */
  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  /**
   * Retrieves all active users in the system.
   * @returns A list of users.
   */
  async findAll() {
    return this.prisma.user.findMany({
      where: {
        isActive: true,
      },
    });
  }

  /**
   * Registers a new user with a hashed password.
   * @param createUserDto The user data.
   * @returns The created user (without password hash).
   * @throws ConflictException if email is already taken.
   */
  async create(createUserDto: CreateUserDto) {
    // 1. Check if a user with this email already exists (Security)
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('A user with this email already exists.');
    }

    // 2. Hash the password securely (Bcrypt)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltRounds,
    );

    // 3. Write to database (using the hashed password)
    const newUser = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        passwordHash: hashedPassword,
        roles: createUserDto.roles,
      },
    });

    // Never return the hashed password to the client
    const { passwordHash, ...safeUserData } = newUser;
    return safeUserData;
  }

  /**
   * Updates an existing user's details.
   * @param id The user ID.
   * @param updateUserDto The data to update.
   * @returns The updated user (without password hash).
   * @throws NotFoundException if user not found.
   * @throws ConflictException if the new email is already taken.
   */
  async update(id: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findOne(id);
    // findOne already throws if user not found

    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const emailTaken = await this.prisma.user.findUnique({
        where: { email: updateUserDto.email },
      });
      if (emailTaken) {
        throw new ConflictException('A user with this email already exists.');
      }
    }

    const dataToUpdate: any = { ...updateUserDto };

    if (updateUserDto.roles && existingUser.roles) {
      // Merge unique roles
      dataToUpdate.roles = Array.from(
        new Set([...existingUser.roles, ...updateUserDto.roles]),
      );
    }

    if (updateUserDto.password) {
      const saltRounds = 10;
      dataToUpdate.passwordHash = await bcrypt.hash(
        updateUserDto.password,
        saltRounds,
      );
      delete dataToUpdate.password;
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });

    const { passwordHash, ...safeUserData } = updatedUser;
    return safeUserData;
  }

  /**
   * Soft-deletes a user by setting isActive to false.
   * @param id The user ID.
   * @returns The updated user.
   * @throws NotFoundException if user not found.
   */
  async remove(id: string) {
    const existingUser = await this.findOne(id);

    const updatedUser = await this.prisma.user.update({
      where: { id: existingUser.id },
      data: { isActive: false },
    });

    const { passwordHash, ...safeUserData } = updatedUser;
    return safeUserData;
  }

  /**
   * Permanently deletes a user from the database.
   * @param id The user ID.
   * @returns The deleted user record.
   * @throws NotFoundException if user not found.
   */
  async hardRemove(id: string) {
    const existingUser = await this.findOne(id);

    const deletedUser = await this.prisma.user.delete({
      where: { id: existingUser.id },
    });

    const { passwordHash, ...safeUserData } = deletedUser;
    return safeUserData;
  }
}
