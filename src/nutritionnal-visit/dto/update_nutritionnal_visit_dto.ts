/* eslint-disable prettier/prettier */
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateNutritionnalVisitDto {
  @IsOptional()
  @IsDate()
  visit_date: Date;

  @IsOptional()
  @IsNumber()
  child_weight: number;

  @IsOptional()
  @IsNumber()
  cranial_perimeter: number;

  @IsOptional()
  @IsNumber()
  brachial_perimeter: number;

  @IsOptional()
  @IsBoolean()
  edemas: boolean;

  @IsOptional()
  @IsString()
  treatment_administered: string;

  @IsOptional()
  @IsBoolean()
  dry_ration: boolean;

  @IsOptional()
  @IsString()
  comments: string;
}
