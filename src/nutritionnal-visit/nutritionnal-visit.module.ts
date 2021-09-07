import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionnalVisitEntity } from './entities/nutritionnal-visit.entity';
import { NutritionnalVisitController } from './nutritionnal-visit.controller';
import { NutritionnalVisitService } from './nutritionnal-visit.service';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionnalVisitEntity])],
  controllers: [NutritionnalVisitController],
  providers: [NutritionnalVisitService],
})
export class NutritionnalVisitModule {}
