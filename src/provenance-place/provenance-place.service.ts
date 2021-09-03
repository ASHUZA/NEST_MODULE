import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewProvenancePlaceDto } from './dto/new_provenance_place_dto';
import { ProvenancePlaceEntity } from './entities/provenance-place.entity';

@Injectable()
export class ProvenancePlaceService {
  constructor(
    @InjectRepository(ProvenancePlaceEntity)
    private provenancePlaceRepository: Repository<ProvenancePlaceEntity>,
  ) {}

  async findProvenancePlaceById(id: number) {
    const provenancePlace = await this.provenancePlaceRepository.findOne(id);
    if (!provenancePlace) {
      throw new NotFoundException(
        `Le lieu de provenance d'id ${id} n'existe pas.`,
      );
    }
    return provenancePlace;
  }

  async getProvenancePlaces(): Promise<ProvenancePlaceEntity[]> {
    return await this.provenancePlaceRepository.find();
  }

  async getProvenancePlace(id: number): Promise<ProvenancePlaceEntity> {
    return await this.findProvenancePlaceById(id);
  }

  async addProvenancePlace(
    provenancePlace: NewProvenancePlaceDto,
  ): Promise<ProvenancePlaceEntity> {
    return await this.provenancePlaceRepository.save(provenancePlace);
  }

  async updateProvenancePlace(
    id: number,
    provenancePlace: NewProvenancePlaceDto,
  ): Promise<ProvenancePlaceEntity> {
    const newProvenancePlace = await this.provenancePlaceRepository.preload({
      id,
      ...provenancePlace,
    });
    if (!newProvenancePlace) {
      throw new NotFoundException(
        `Le lieu de provenance d'id ${id} n'existe pas.`,
      );
    }
    return await this.provenancePlaceRepository.save(newProvenancePlace);
  }

  async deleteProvenacePlace(id: number): Promise<ProvenancePlaceEntity> {
    const provenancePlace = await this.findProvenancePlaceById(id);
    return await this.provenancePlaceRepository.remove(provenancePlace);
  }
}
