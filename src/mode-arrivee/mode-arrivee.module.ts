import { Module } from '@nestjs/common';
import { ModeArriveeController } from './mode-arrivee.controller';
import { ModeArriveeService } from './mode-arrivee.service';

@Module({
  controllers: [ModeArriveeController],
  providers: [ModeArriveeService]
})
export class ModeArriveeModule {}
