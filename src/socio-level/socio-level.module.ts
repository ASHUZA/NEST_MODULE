import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocioLevelEntity } from './entities/socio-level.entity';
import { SocioLevelController } from './socio-level.controller';
import { SocioLevelService } from './socio-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([SocioLevelEntity])],
  controllers: [SocioLevelController],
  providers: [SocioLevelService],
})
export class SocioLevelModule {}
