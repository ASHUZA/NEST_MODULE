/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';

export class UpdateSocioLevelDto {
  @IsOptional()
  @IsString()
  socio_level_name: string;

  @IsOptional()
  @IsString()
  salary: string;
}
