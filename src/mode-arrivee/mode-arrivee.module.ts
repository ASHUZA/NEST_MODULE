import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeArriveeEntity } from './entities/mode-arrivee.entity';
import { ModeArriveeController } from './mode-arrivee.controller';
import { ModeArriveeService } from './mode-arrivee.service';

@Module({
  imports: [TypeOrmModule.forFeature([ModeArriveeEntity])],
  controllers: [ModeArriveeController],
  providers: [ModeArriveeService]
})
export class ModeArriveeModule {}
