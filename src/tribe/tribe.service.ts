import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewTribeDto } from './dto/new_tribe_dto';
import { TribeEntity } from './entities/tribe.entity';

@Injectable()
export class TribeService {
  constructor(
    @InjectRepository(TribeEntity)
    private tribeRepository: Repository<TribeEntity>,
  ) {}
  async findTribeById(id: number) {
    const tribe = await this.tribeRepository.findOne(id);
    if (!tribe) {
      throw new NotFoundException(`Le tribu d'id ${id} n'existe pas.`);
    }
    return tribe;
  }
  async getTribes(): Promise<TribeEntity[]> {
    return await this.tribeRepository.find();
  }
  async getTribe(id: number): Promise<TribeEntity> {
    return await this.findTribeById(id);
  }
  async addTribe(tribe: NewTribeDto): Promise<TribeEntity> {
    return await this.tribeRepository.save(tribe);
  }
  async updateTribe(id: number, tribe: NewTribeDto): Promise<TribeEntity> {
    const newTribe = await this.tribeRepository.preload({
      id,
      ...tribe,
    });
    if (!newTribe) {
      throw new NotFoundException(`Le tribe d'id ${id} n'existe pas.`);
    }
    return await this.tribeRepository.save(newTribe);
  }
  async deleteTribe(id: number): Promise<TribeEntity> {
    const tribe = await this.findTribeById(id);
    return await this.tribeRepository.remove(tribe);
  }
}
