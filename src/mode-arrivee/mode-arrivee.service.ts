import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewModeArriveeDto } from './dto/new_mode_arrivee_dto';
import { ModeArriveeEntity } from './entities/mode-arrivee.entity';

@Injectable()
export class ModeArriveeService {
  constructor(
    @InjectRepository(ModeArriveeEntity)
    private modeArriveeRepository: Repository<ModeArriveeEntity>,
  ) {}

  async findModeArriveeById(id: number) {
    const mode_arrivee = await this.modeArriveeRepository.findOne(id);
    if (!mode_arrivee) {
      throw new NotFoundException(`Le mode d'arrivee d'id ${id} n'existe pas.`);
    }
    return mode_arrivee;
  }
  async getMode_arrivees(): Promise<ModeArriveeEntity[]> {
    return await this.modeArriveeRepository.find();
  }
  async getMode_arroiveeById(id: number): Promise<ModeArriveeEntity> {
    return await this.findModeArriveeById(id);
  }
  async addModeArrivee(
    ModeArrivee: NewModeArriveeDto,
  ): Promise<ModeArriveeEntity> {
    return await this.modeArriveeRepository.save(ModeArrivee);
  }

  async updateModeArrivee(
    id: number,
    ModeArrivee: NewModeArriveeDto,
  ): Promise<ModeArriveeEntity> {
    const newModeArrivee = await this.modeArriveeRepository.preload({
      id,
      ...ModeArrivee,
    });
    if (!newModeArrivee) {
      throw new NotFoundException(`Le mode d'arrivée d'id ${id} n'existe pas.`);
    }
    return await this.modeArriveeRepository.save(newModeArrivee);
  }
  async deleteModeArrivee(id: number): Promise<ModeArriveeEntity> {
    const ModeArrivee = await this.findModeArriveeById(id);
    return await this.modeArriveeRepository.remove(ModeArrivee);
  }
}
