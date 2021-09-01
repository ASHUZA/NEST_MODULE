import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContraceptionController } from './contraception.controller';
import { ContraceptionService } from './contraception.service';
import { ContraceptionEntity } from './entities/contraception.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContraceptionEntity])],
  controllers: [ContraceptionController],
  providers: [ContraceptionService],
})
export class ContraceptionModule {}
