import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TribeEntity } from './entities/tribe.entity';
import { TribeController } from './tribe.controller';
import { TribeService } from './tribe.service';

@Module({
  imports: [TypeOrmModule.forFeature([TribeEntity])],
  controllers: [TribeController],
  providers: [TribeService],
})
export class TribeModule {}
