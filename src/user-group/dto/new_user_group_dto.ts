/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class NewUserGroupDto {
  @IsNotEmpty()
  @IsString()
  user_group_name: string;
}
