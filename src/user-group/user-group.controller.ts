import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NewUserGroupDto } from './dto/new_user_group_dto';
import { UserGroupEntity } from './entities/user-group.entity';
import { UserGroupService } from './user-group.service';

@Controller('groupe-user')
export class UserGroupController {
  constructor(private userGroupService: UserGroupService) {}

  @Get()
  async getAllUserGroup(): Promise<UserGroupEntity[]> {
    return await this.userGroupService.getUserGroup();
  }
  @Get('/:id')
  async getUserGroupById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserGroupEntity> {
    return await this.userGroupService.getUserGroupById(id);
  }
  @Post()
  async addUserGroup(
    @Body() userGroup: NewUserGroupDto,
  ): Promise<UserGroupEntity> {
    return await this.userGroupService.addUserGroup(userGroup);
  }
  @Patch('/:id')
  async updateUserGroup(
    @Param('id', ParseIntPipe) id: number,
    @Body() userGroup: NewUserGroupDto,
  ): Promise<UserGroupEntity> {
    return await this.userGroupService.updateUserGroup(id, userGroup);
  }
  @Delete('/:id')
  async deleteUserGroup(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserGroupEntity> {
    return await this.userGroupService.deleteUserGroup(id);
  }
}
