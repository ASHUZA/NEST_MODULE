import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewUserGroupDto } from './dto/new_user_group_dto';
import { UserGroupEntity } from './entities/user-group.entity';

@Injectable()
export class UserGroupService {
  constructor(
    @InjectRepository(UserGroupEntity)
    private usergroupRepository: Repository<UserGroupEntity>,
  ) {}
  async findUserGroupById(id: number) {
    const userGroup = await this.usergroupRepository.findOne(id);
    if (!userGroup) {
      throw new NotFoundException(
        `Le groue utilisateur d'id ${id} n'existe pas!`,
      );
    }
    return userGroup;
  }
  async getUserGroup(): Promise<UserGroupEntity[]> {
    return await this.usergroupRepository.find();
  }
  async addUserGroup(userGroup: NewUserGroupDto): Promise<UserGroupEntity> {
    return await this.usergroupRepository.save(userGroup);
  }
  async getUserGroupById(id: number): Promise<UserGroupEntity> {
    return await this.findUserGroupById(id);
  }
  async updateUserGroup(
    id: number,
    userGroup: NewUserGroupDto,
  ): Promise<UserGroupEntity> {
    const newUserGroup = await this.usergroupRepository.preload({
      id,
      ...userGroup,
    });
    if (!newUserGroup) {
      throw new NotFoundException(
        `Le groue utilisateur d'id ${id} n'existe pas!`,
      );
    }
    // console.log(await this.usergroupRepository.save(newUserGroup));
    return await this.usergroupRepository.save(newUserGroup);
  }
  async deleteUserGroup(id: number): Promise<UserGroupEntity> {
    const userGroup = await this.findUserGroupById(id);
    return await this.usergroupRepository.remove(userGroup);
  }
}
