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
import { NewTribeDto } from './dto/new_tribe_dto';
import { TribeEntity } from './entities/tribe.entity';
import { TribeService } from './tribe.service';

@Controller('tribe')
export class TribeController {
  constructor(private tribeService: TribeService) {}

  @Get()
  async getAllTribes(): Promise<TribeEntity[]> {
    return await this.tribeService.getTribes();
  }

  @Get('/:id')
  async getTribe(@Param('id', ParseIntPipe) id: number): Promise<TribeEntity> {
    return await this.tribeService.getTribe(id);
  }
  @Post()
  async addTribe(@Body() tribe: NewTribeDto): Promise<TribeEntity> {
    return await this.tribeService.addTribe(tribe);
  }
  @Patch('/:id')
  async updateTribe(
    @Param('id', ParseIntPipe) id: number,
    @Body() tribe: NewTribeDto,
  ): Promise<TribeEntity> {
    return await this.tribeService.updateTribe(id, tribe);
  }
  @Delete('/:id')
  async deleteTribe(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TribeEntity> {
    return await this.tribeService.deleteTribe(id);
  }
}
