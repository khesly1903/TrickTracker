import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateSkillDto {
  @ApiProperty()
  @IsInt()
  @Min(0)
  status: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  note?: string;
}
