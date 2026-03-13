import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Retrieve all active users' })
  @ApiOkResponse({ description: 'Return a list of active users.' })
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiOkResponse({ description: 'Return the user record.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ description: 'User successfully registered.' })
  @ApiConflictResponse({ description: 'Email already exists.' })
  @Post()
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Update user details' })
  @ApiOkResponse({ description: 'User successfully updated.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @ApiConflictResponse({ description: 'New email already taken.' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Permanently delete a user' })
  @ApiNoContentResponse({ description: 'User permanently deleted.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.usersService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete a user' })
  @ApiNoContentResponse({
    description: 'User soft-deleted (isActive set to false).',
  })
  @ApiNotFoundResponse({ description: 'User not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
