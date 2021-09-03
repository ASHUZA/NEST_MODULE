import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaritalStatusEntity } from './entities/marital-status.entity';
import { MaritalStatusController } from './marital-status.controller';
import { MaritalStatusService } from './marital-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([MaritalStatusEntity])],
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService],
})
export class MaritalStatusModule {}
