/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewReligionDto {
  @IsNotEmpty()
  @IsString()
  religion_name: string;
}
