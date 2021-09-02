import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewMotherConditionDto } from './dto/new_mother_condition_dto';
import { MotherConditionEntity } from './entities/mother-condition.entity';

@Injectable()
export class MotherConditionService {
  constructor(
    @InjectRepository(MotherConditionEntity)
    private motherConditionRepository: Repository<MotherConditionEntity>,
  ) {}

  async findMotherConditionById(id: number) {
    const motherCondition = await this.motherConditionRepository.findOne(id);
    if (!motherCondition) {
      throw new NotFoundException(`L'état de la mère d'id ${id} n'existe pas.`);
    }
    return motherCondition;
  }

  async getMotherConditions(): Promise<MotherConditionEntity[]> {
    return await this.motherConditionRepository.find();
  }

  async getMotherConditionById(id: number): Promise<MotherConditionEntity> {
    return await this.findMotherConditionById(id);
  }

  async addMotherCondition(
    motherCondition: NewMotherConditionDto,
  ): Promise<MotherConditionEntity> {
    return await this.motherConditionRepository.save(motherCondition);
  }

  async updateMotherCondition(
    id: number,
    motherCondition: NewMotherConditionDto,
  ): Promise<MotherConditionEntity> {
    const newMotherCondiion = await this.motherConditionRepository.preload({
      id,
      ...motherCondition,
    });
    if (!newMotherCondiion) {
      throw new NotFoundException(`L'état de la mère d'id ${id} n'existe pas.`);
    }
    return await this.motherConditionRepository.save(newMotherCondiion);
  }

  async deleteMotherCondition(id: number): Promise<MotherConditionEntity> {
    const motherCondition = await this.findMotherConditionById(id);
    return await this.motherConditionRepository.remove(motherCondition);
  }
}
