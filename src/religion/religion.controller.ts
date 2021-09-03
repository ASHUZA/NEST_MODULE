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
import { NewReligionDto } from './dto/new_religion_dto';
import { ReligionEntity } from './entities/religion.entity';
import { ReligionService } from './religion.service';

@Controller('religion')
export class ReligionController {
  constructor(private religionService: ReligionService) {}
  @Get()
  async getAllReligions(): Promise<ReligionEntity[]> {
    return await this.religionService.getReligions();
  }
  @Get('/:id')
  async getReligion(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ReligionEntity> {
    return await this.religionService.getReligion(id);
  }
  @Post()
  async addReligion(@Body() religion: NewReligionDto): Promise<ReligionEntity> {
    return await this.religionService.addReligion(religion);
  }
  @Patch('/:id')
  async updateReligion(
    @Param('id', ParseIntPipe) id: number,
    @Body() religion: NewReligionDto,
  ): Promise<ReligionEntity> {
    return await this.religionService.updateReligion(id, religion);
  }
  @Delete('/:id')
  async deleteReligion(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ReligionEntity> {
    return await this.religionService.deleteReligion(id);
  }
}
