import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NewVisitDayDto } from './dto/new_visit_day_dto';
import { VisitDayEntity } from './entities/visit-day.entity';
import { VisitDayService } from './visit-day.service';

@Controller('visit-day')
export class VisitDayController {
  constructor(private visitDayService: VisitDayService) {}
  @Get()
  async getAllVisitDays(): Promise<VisitDayEntity[]> {
    return await this.visitDayService.getVisitDays();
  }
  @Get('/:id')
  async getVisitDay(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VisitDayEntity> {
    return await this.visitDayService.getVisitDay(id);
  }
  @Post()
  async addVisitDay(@Body() visitDay: NewVisitDayDto): Promise<VisitDayEntity> {
    return await this.visitDayService.addVisitDay(visitDay);
  }
  @Patch('/:id')
  async updateVisitDay(
    @Param('id', ParseIntPipe) id: number,
    @Body() visitDay: NewVisitDayDto,
  ): Promise<VisitDayEntity> {
    return await this.visitDayService.updateVisitDay(id, visitDay);
  }
  @Delete('/:id')
  async deleteVisitDay(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<VisitDayEntity> {
    return await this.visitDayService.deleteVisitDay(id);
  }
}
