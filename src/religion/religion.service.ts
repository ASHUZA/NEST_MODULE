import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewReligionDto } from './dto/new_religion_dto';
import { ReligionEntity } from './entities/religion.entity';

@Injectable()
export class ReligionService {
  constructor(
    @InjectRepository(ReligionEntity)
    private religionRepository: Repository<ReligionEntity>,
  ) {}
  async findReligionById(id: number) {
    const religion = await this.religionRepository.findOne(id);
    if (!religion) {
      throw new NotFoundException(`La Religion d'id ${id} n'existe pas.`);
    }
    return religion;
  }
  async getReligions(): Promise<ReligionEntity[]> {
    return await this.religionRepository.find();
  }
  async getReligion(id: number): Promise<ReligionEntity> {
    return await this.findReligionById(id);
  }
  async addReligion(religion: NewReligionDto): Promise<ReligionEntity> {
    return await this.religionRepository.save(religion);
  }
  async updateReligion(
    id: number,
    religion: NewReligionDto,
  ): Promise<ReligionEntity> {
    const newReligion = await this.religionRepository.preload({
      id,
      ...religion,
    });
    if (!newReligion) {
      throw new NotFoundException(`La religion d'id ${id} n'existe pas!`);
    }
    return await this.religionRepository.save(newReligion);
  }

  async deleteReligion(id: number): Promise<ReligionEntity> {
    const religion = await this.findReligionById(id);
    return await this.religionRepository.remove(religion);
  }
}
