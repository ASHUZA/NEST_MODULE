import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewArrivalModeDto } from './dto/new_mode_arrivee_dto';
import { ArrivalModeEntity } from './entities/mode-arrivee.entity';

@Injectable()
export class ArrivalModeService {
  constructor(
    @InjectRepository(ArrivalModeEntity)
    private ArrivalModeRepository: Repository<ArrivalModeEntity>,
  ) {}

  async findArrivalModeById(id: number) {
    const mode_arrivee = await this.ArrivalModeRepository.findOne(id);
    if (!mode_arrivee) {
      throw new NotFoundException(`Le mode d'arrivee d'id ${id} n'existe pas.`);
    }
    return mode_arrivee;
  }
  async getMode_arrivees(): Promise<ArrivalModeEntity[]> {
    return await this.ArrivalModeRepository.find();
  }
  async getMode_arroiveeById(id: number): Promise<ArrivalModeEntity> {
    return await this.findArrivalModeById(id);
  }
  async addArrivalMode(
    ArrivalMode: NewArrivalModeDto,
  ): Promise<ArrivalModeEntity> {
    return await this.ArrivalModeRepository.save(ArrivalMode);
  }

  async updateArrivalMode(
    id: number,
    ArrivalMode: NewArrivalModeDto,
  ): Promise<ArrivalModeEntity> {
    const newArrivalMode = await this.ArrivalModeRepository.preload({
      id,
      ...ArrivalMode,
    });
    if (!newArrivalMode) {
      throw new NotFoundException(`Le mode d'arrivée d'id ${id} n'existe pas.`);
    }
    return await this.ArrivalModeRepository.save(newArrivalMode);
  }
  async deleteArrivalMode(id: number): Promise<ArrivalModeEntity> {
    const ArrivalMode = await this.findArrivalModeById(id);
    return await this.ArrivalModeRepository.remove(ArrivalMode);
  }
}
