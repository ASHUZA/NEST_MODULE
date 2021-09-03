import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewVisitDayDto } from './dto/new_visit_day_dto';
import { VisitDayEntity } from './entities/visit-day.entity';

@Injectable()
export class VisitDayService {
  constructor(
    @InjectRepository(VisitDayEntity)
    private visitDayRepository: Repository<VisitDayEntity>,
  ) {}
  async findVisitDayById(id: number) {
    const visitDay = await this.visitDayRepository.findOne(id);
    if (!visitDay) {
      throw new NotFoundException(`Le jour de visite d(id ${id} n'existe pas`);
    }
    return visitDay;
  }
  async getVisitDays(): Promise<VisitDayEntity[]> {
    return await this.visitDayRepository.find();
  }
  async getVisitDay(id: number): Promise<VisitDayEntity> {
    return await this.findVisitDayById(id);
  }
  async addVisitDay(visitDay: NewVisitDayDto): Promise<VisitDayEntity> {
    return await this.visitDayRepository.save(visitDay);
  }
  async updateVisitDay(
    id: number,
    visitDay: NewVisitDayDto,
  ): Promise<VisitDayEntity> {
    const newVisitDay = await this.visitDayRepository.preload({
      id,
      ...visitDay,
    });
    if (!newVisitDay) {
      throw new NotFoundException(`Le jour de visite d'id ${id} n'existe pas.`);
    }
    return await this.visitDayRepository.save(newVisitDay);
  }
  async deleteVisitDay(id: number): Promise<VisitDayEntity> {
    const visitDay = await this.findVisitDayById(id);
    return await this.visitDayRepository.remove(visitDay);
  }
}
