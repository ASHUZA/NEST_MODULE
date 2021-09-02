import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotherConditionEntity } from './entities/mother-condition.entity';
import { MotherConditionController } from './mother-condition.controller';
import { MotherConditionService } from './mother-condition.service';

@Module({
  imports: [TypeOrmModule.forFeature([MotherConditionEntity])],
  controllers: [MotherConditionController],
  providers: [MotherConditionService],
})
export class MotherConditionModule {}
