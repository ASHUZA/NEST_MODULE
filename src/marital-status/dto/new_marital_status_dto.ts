/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewMaritalStatusDto {
  @IsNotEmpty()
  @IsString()
  marital_status_name: string;
}
