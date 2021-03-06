import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContraceptionModule } from './contraception/contraception.module';
import { ArrivalModeModule } from './mode-arrivee/mode-arrivee.module';
import * as dotenv from 'dotenv';
import { MotherConditionModule } from './mother-condition/mother-condition.module';
import { UserGroupModule } from './user-group/user-group.module';
import { ProvenancePlaceModule } from './provenance-place/provenance-place.module';
import { SocioLevelModule } from './socio-level/socio-level.module';
import { ReligionModule } from './religion/religion.module';
import { TribeModule } from './tribe/tribe.module';
import { VisitDayModule } from './visit-day/visit-day.module';
import { MaritalStatusModule } from './marital-status/marital-status.module';
import { NutrinnalVisitModule } from './nutrinnal-visit/nutrinnal-visit.module';
import { NutritionnalVisitModule } from './nutritionnal-visit/nutritionnal-visit.module';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity.{ts,js}'],

      synchronize: true,
    }),
    ContraceptionModule,
    ArrivalModeModule,
    MotherConditionModule,
    UserGroupModule,
    ProvenancePlaceModule,
    SocioLevelModule,
    ReligionModule,
    TribeModule,
    VisitDayModule,
    MaritalStatusModule,
    NutrinnalVisitModule,
    NutritionnalVisitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
