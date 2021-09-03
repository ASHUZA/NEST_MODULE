import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReligionEntity } from './entities/religion.entity';
import { ReligionController } from './religion.controller';
import { ReligionService } from './religion.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReligionEntity])],
  controllers: [ReligionController],
  providers: [ReligionService],
})
export class ReligionModule {}
