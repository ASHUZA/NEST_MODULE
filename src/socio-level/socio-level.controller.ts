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
import { NewSocioLevelDto } from './dto/new_socio_level_dto';
import { UpdateSocioLevelDto } from './dto/update_socio_level_dto';
import { SocioLevelEntity } from './entities/socio-level.entity';
import { SocioLevelService } from './socio-level.service';

@Controller('socio-level')
export class SocioLevelController {
  constructor(private socioLevelService: SocioLevelService) {}

  @Get()
  async getAllSocioLevel(): Promise<SocioLevelEntity[]> {
    return await this.socioLevelService.getSocioLevel();
  }
  @Get('/:id')
  async getsocioLevelById(@Param('id', ParseIntPipe) id: number) {
    return await this.socioLevelService.getSocioLevelById(id);
  }
  @Post()
  async addSocioLevel(
    @Body() socioLevel: NewSocioLevelDto,
  ): Promise<SocioLevelEntity> {
    return await this.socioLevelService.addSocioLevel(socioLevel);
  }
  @Patch('/:id')
  async updateSocioLevel(
    @Param('id', ParseIntPipe) id: number,
    @Body() socioLevel: UpdateSocioLevelDto,
  ): Promise<SocioLevelEntity> {
    return await this.socioLevelService.updateSocioLevel(id, socioLevel);
  }
  @Delete('/:id')
  async deletesocioLevel(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SocioLevelEntity> {
    return await this.socioLevelService.deleteSocioLevel(id);
  }
}
