import {
  Controller,
  Get,
  ParseIntPipe,
  Param,
  Patch,
  Delete,
  Body,
  Post,
} from '@nestjs/common';
import { NewArrivalModeDto } from './dto/new_mode_arrivee_dto';
import { ArrivalModeEntity } from './entities/mode-arrivee.entity';
import { ArrivalModeService } from './mode-arrivee.service';

@Controller('mode_arrivee')
export class ArrivalModeController {
  constructor(private ArrivalModeService: ArrivalModeService) {}

  @Get()
  async getAllArrivalModes(): Promise<ArrivalModeEntity[]> {
    return await this.ArrivalModeService.getMode_arrivees();
  }
  @Get('/:id')
  async getArrivalModeById(@Param('id', ParseIntPipe) id: number) {
    return await this.ArrivalModeService.getMode_arroiveeById(id);
  }
  @Post()
  async addArrivalMode(
    @Body() ArrivalMode: NewArrivalModeDto,
  ): Promise<ArrivalModeEntity> {
    return await this.ArrivalModeService.addArrivalMode(ArrivalMode);
  }
  @Patch('/:id')
  async updateArrivalMode(
    @Param('id', ParseIntPipe) id: number,
    @Body() ArrivalMode: NewArrivalModeDto,
  ): Promise<ArrivalModeEntity> {
    return await this.ArrivalModeService.updateArrivalMode(id, ArrivalMode);
  }
  @Delete('/:id')
  async deleteArrivalMode(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ArrivalModeEntity> {
    return await this.ArrivalModeService.deleteArrivalMode(id);
  }
}
