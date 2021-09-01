import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewContraceptionDto } from './dto/newContraceptionDto';
import { UpdateContraceptionDto } from './dto/updateContraceptionDto';
import { ContraceptionEntity } from './entities/contraception.entity';

@Injectable()
export class ContraceptionService {
  constructor(
    @InjectRepository(ContraceptionEntity)
    private contraceptionRepository: Repository<ContraceptionEntity>,
  ) {}

  async findContraceptionById(id: number) {
    const contraception = await this.contraceptionRepository.findOne(id);
    if (!contraception) {
      throw new NotFoundException(`La contraception d'id ${id} n'existe pas.`);
    }
    return contraception;
  }

  async getContraceptions(): Promise<ContraceptionEntity[]> {
    return await this.contraceptionRepository.find();
  }

  async getContraceptionById(id: number): Promise<ContraceptionEntity> {
    return await this.findContraceptionById(id);
  }

  async addContraception(
    Contraception: NewContraceptionDto,
  ): Promise<ContraceptionEntity> {
    return await this.contraceptionRepository.save(Contraception);
  }

  async updateContraception(
    id: number,
    contraception: UpdateContraceptionDto,
  ): Promise<ContraceptionEntity> {
    const newContraception = await this.contraceptionRepository.preload({
      id,
      ...contraception,
    });
    if (!newContraception) {
      throw new NotFoundException(`La contraception d'id ${id} n'existe pas.`);
    }
    return await this.contraceptionRepository.save(newContraception);
  }

  async deleteContraception(id: number): Promise<ContraceptionEntity> {
    const contraception = await this.findContraceptionById(id);
    return await this.contraceptionRepository.remove(contraception);
  }

  //const rech = this.contraceptionRepository.findOne(id)
}
