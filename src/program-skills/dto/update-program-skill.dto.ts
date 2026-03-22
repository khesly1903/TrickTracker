import { PartialType } from '@nestjs/swagger';
import { CreateProgramSkillItemDto } from './add-program-skills.dto';

export class UpdateProgramSkillDto extends PartialType(
  CreateProgramSkillItemDto,
) {}
