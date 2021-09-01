import { IsNotEmpty, IsString } from 'class-validator';

export class NewContraceptionDto {
  @IsNotEmpty()
  @IsString()
  contraception_name: string;

  @IsNotEmpty()
  @IsString()
  contraception_type: string;
}
