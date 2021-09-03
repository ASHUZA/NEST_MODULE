import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewMaritalStatusDto } from './dto/new_marital_status_dto';
import { MaritalStatusEntity } from './entities/marital-status.entity';

@Injectable()
export class MaritalStatusService {
  constructor(
    @InjectRepository(MaritalStatusEntity)
    private MaritalStatusRepository: Repository<MaritalStatusEntity>,
  ) {}
  async findMaritalStatusById(id: number) {
    const maritalStatus = await this.MaritalStatusRepository.findOne(id);
    if (!maritalStatus) {
      throw new NotFoundException(
        `Le statut matrimonial d'id ${id} n'existe pas`,
      );
    }
    return maritalStatus;
  }
  async getMaritalStatuses(): Promise<MaritalStatusEntity[]> {
    return await this.MaritalStatusRepository.find();
  }
  async getMaritalStatus(id: number): Promise<MaritalStatusEntity> {
    return await this.findMaritalStatusById(id);
  }
  async addMaritalStatus(
    MaritalStatus: NewMaritalStatusDto,
  ): Promise<MaritalStatusEntity> {
    return await this.MaritalStatusRepository.save(MaritalStatus);
  }
  async updateMaritalStatus(
    id: number,
    MaritalStatus: NewMaritalStatusDto,
  ): Promise<MaritalStatusEntity> {
    const newMaritalStatus = await this.MaritalStatusRepository.preload({
      id,
      ...MaritalStatus,
    });
    if (!newMaritalStatus) {
      throw new NotFoundException(`Le mode d'arrivee d'id ${id} n'existe pas.`);
    }
    return await this.MaritalStatusRepository.save(newMaritalStatus);
  }
  async deleteMaritalStatus(id: number): Promise<MaritalStatusEntity> {
    const MaritalStatus = await this.findMaritalStatusById(id);
    return await this.MaritalStatusRepository.remove(MaritalStatus);
  }
}
