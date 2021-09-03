/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewSocioLevelDto {
  @IsNotEmpty()
  @IsString()
  socio_level_name: string;

  @IsNotEmpty()
  @IsString()
  salary: string;
}
