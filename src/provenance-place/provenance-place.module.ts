import { Module } from '@nestjs/common';
import { ProvenancePlaceService } from './provenance-place.service';
import { ProvenancePlaceController } from './provenance-place.controller';
import { ProvenancePlaceEntity } from './entities/provenance-place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProvenancePlaceEntity])],
  providers: [ProvenancePlaceService],
  controllers: [ProvenancePlaceController],
})
export class ProvenancePlaceModule {}
