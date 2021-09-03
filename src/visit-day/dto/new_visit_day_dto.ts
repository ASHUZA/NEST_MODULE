/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewVisitDayDto {
  @IsNotEmpty()
  @IsString()
  visit_day_name: string;
}
