import { IsNotEmpty, IsString } from 'class-validator';

export class NewMotherConditionDto {
  @IsNotEmpty()
  @IsString()
  mother_condition_name: string;
}
