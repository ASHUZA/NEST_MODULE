import { Module } from '@nestjs/common';
import { UserGroupService } from './user-group.service';
import { UserGroupController } from './user-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupEntity } from './entities/user-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroupEntity])],
  providers: [UserGroupService],
  controllers: [UserGroupController],
})
export class UserGroupModule {}
