import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContraceptionModule } from './contraception/contraception.module';
import { ModeArriveeModule } from './mode-arrivee/mode-arrivee.module';
import * as dotenv from 'dotenv';
import { MotherConditionModule } from './mother-condition/mother-condition.module';
import { UserGroupModule } from './user-group/user-group.module';
import { ProvenancePlaceModule } from './provenance-place/provenance-place.module';

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
    ModeArriveeModule,
    MotherConditionModule,
    UserGroupModule,
    ProvenancePlaceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
