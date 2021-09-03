import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewSocioLevelDto } from './dto/new_socio_level_dto';
import { UpdateSocioLevelDto } from './dto/update_socio_level_dto';
import { SocioLevelEntity } from './entities/socio-level.entity';

@Injectable()
export class SocioLevelService {
  constructor(
    @InjectRepository(SocioLevelEntity)
    private socioLevelRepository: Repository<SocioLevelEntity>,
  ) {}
  async findSocioLevelById(id: number) {
    const socioLevel = await this.socioLevelRepository.findOne(id);
    if (!socioLevel) {
      throw new NotFoundException(
        `La niveau socio economique d'id ${id} n'existe pas.`,
      );
    }
    return socioLevel;
  }
  async getSocioLevel(): Promise<SocioLevelEntity[]> {
    return await this.socioLevelRepository.find();
  }
  async getSocioLevelById(id: number): Promise<SocioLevelEntity> {
    return await this.findSocioLevelById(id);
  }
  async addSocioLevel(socioLevel: NewSocioLevelDto): Promise<SocioLevelEntity> {
    return await this.socioLevelRepository.save(socioLevel);
  }
  async updateSocioLevel(
    id: number,
    socioLevel: UpdateSocioLevelDto,
  ): Promise<SocioLevelEntity> {
    const newSocioLevel = await this.socioLevelRepository.preload({
      id,
      ...socioLevel,
    });
    if (!newSocioLevel) {
      throw new NotFoundException(
        `Le niveau socio economique d'id ${id} n'existe pas.`,
      );
    }
    return await this.socioLevelRepository.save(newSocioLevel);
  }
  async deleteSocioLevel(id: number): Promise<SocioLevelEntity> {
    const socioLevel = await this.findSocioLevelById(id);
    return await this.socioLevelRepository.remove(socioLevel);
  }
}
