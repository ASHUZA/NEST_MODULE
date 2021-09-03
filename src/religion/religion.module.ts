import { Module } from '@nestjs/common';
import { ReligionController } from './religion.controller';
import { ReligionService } from './religion.service';

@Module({
  controllers: [ReligionController],
  providers: [ReligionService]
})
export class ReligionModule {}
