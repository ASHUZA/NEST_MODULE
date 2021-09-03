import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitDayEntity } from './entities/visit-day.entity';
import { VisitDayController } from './visit-day.controller';
import { VisitDayService } from './visit-day.service';

@Module({
  imports: [TypeOrmModule.forFeature([VisitDayEntity])],
  controllers: [VisitDayController],
  providers: [VisitDayService],
})
export class VisitDayModule {}
