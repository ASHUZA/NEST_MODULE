import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewNutritionnalVisitDto } from './dto/new_nutritionnal_visit_dto';
import { UpdateNutritionnalVisitDto } from './dto/update_nutritionnal_visit_dto';
import { NutritionnalVisitEntity } from './entities/nutritionnal-visit.entity';

@Injectable()
export class NutritionnalVisitService {
  constructor(
    @InjectRepository(NutritionnalVisitService)
    private nutritionnalVisitRepository: Repository<NutritionnalVisitEntity>,
  ) {}

  async findNutritionnalVisitById(id: number) {
    const nutritionnalVisit = await this.nutritionnalVisitRepository.findOne(
      id,
    );
    if (!nutritionnalVisit) {
      throw new NotFoundException(
        `La visite nutritionnel d'id ${id} n'existe pas !`,
      );
    }
    return nutritionnalVisit;
  }
  async getNutritionnalVisit(): Promise<NutritionnalVisitEntity[]> {
    return await this.nutritionnalVisitRepository.find();
  }
  async getNutritionnalVisitById(id: number): Promise<NutritionnalVisitEntity> {
    return await this.findNutritionnalVisitById(id);
  }
  async addNutritionnalVisit(
    nutritionnalVisit: NewNutritionnalVisitDto,
  ): Promise<NutritionnalVisitEntity> {
    return await this.nutritionnalVisitRepository.save(nutritionnalVisit);
  }
  async updateNutritionnalVisit(
    id: number,
    nutritionnalVisit: UpdateNutritionnalVisitDto,
  ): Promise<NutritionnalVisitEntity> {
    const NewNutritionnalVisit = await this.nutritionnalVisitRepository.preload(
      {
        id,
        ...nutritionnalVisit,
      },
    );
    if (!NewNutritionnalVisit) {
      throw new NotFoundException(
        `La visite nutritionnele d'id ${id} n'existe pas !`,
      );
    }
    return await this.nutritionnalVisitRepository.save(NewNutritionnalVisit);
  }
  async deleteNutritionnalVisit(id: number): Promise<NutritionnalVisitEntity> {
    const nutritionnalVisit = await this.findNutritionnalVisitById(id);
    return await this.nutritionnalVisitRepository.remove(nutritionnalVisit);
  }
}
