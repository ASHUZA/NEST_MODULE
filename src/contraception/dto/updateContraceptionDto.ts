import { IsOptional, IsString } from 'class-validator';

export class UpdateContraceptionDto {
  @IsOptional()
  @IsString()
  contraception_name: string;

  @IsOptional()
  @IsString()
  contraception_type: string;
}
