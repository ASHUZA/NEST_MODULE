/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class NewProvenancePlaceDto {
  @IsNotEmpty()
  @IsString()
  provenance_place_name: string;
}
