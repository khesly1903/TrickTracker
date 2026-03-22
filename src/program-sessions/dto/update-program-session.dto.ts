import { PartialType } from '@nestjs/swagger';
import { CreateProgramSessionDto } from './create-program-session.dto';

export class UpdateProgramSessionDto extends PartialType(
  CreateProgramSessionDto,
) {}
