/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class NewNutritionnalVisitDto {
  @IsNotEmpty()
  @IsDate()
  visit_date: Date;

  @IsNotEmpty()
  @IsNumber()
  child_weight: number;

  @IsNotEmpty()
  @IsNumber()
  cranial_perimeter: number;

  @IsNotEmpty()
  @IsNumber()
  brachial_perimeter: number;

  @IsNotEmpty()
  @IsBoolean()
  edemas: boolean;

  @IsNotEmpty()
  @IsString()
  treatment_administered: string;

  @IsNotEmpty()
  @IsBoolean()
  dry_ration: boolean;

  @IsOptional()
  @IsString()
  comments: string;
}
