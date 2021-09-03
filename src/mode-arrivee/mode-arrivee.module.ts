import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArrivalModeEntity } from './entities/mode-arrivee.entity';
import { ArrivalModeController } from './mode-arrivee.controller';
import { ArrivalModeService } from './mode-arrivee.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArrivalModeEntity])],
  controllers: [ArrivalModeController],
  providers: [ArrivalModeService],
})
export class ArrivalModeModule {}
