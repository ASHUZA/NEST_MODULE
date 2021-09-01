/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';


export class NewModeArriveeDto {
  @IsNotEmpty()
  @IsString()
  mode_arrivee_name: string;
}
