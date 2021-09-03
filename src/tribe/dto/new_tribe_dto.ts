/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewTribeDto {
  @IsNotEmpty()
  @IsString()
  tribe_name: string;
}
