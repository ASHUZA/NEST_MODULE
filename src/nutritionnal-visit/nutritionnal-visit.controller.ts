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
import { NewNutritionnalVisitDto } from './dto/new_nutritionnal_visit_dto';
import { UpdateNutritionnalVisitDto } from './dto/update_nutritionnal_visit_dto';
import { NutritionnalVisitEntity } from './entities/nutritionnal-visit.entity';
import { NutritionnalVisitService } from './nutritionnal-visit.service';

@Controller('nutritionnal-visit')
export class NutritionnalVisitController {
  constructor(private nutritionnalVisitService: NutritionnalVisitService) {}

  @Get()
  async getAllNutritionnalVisit(): Promise<NutritionnalVisitEntity[]> {
    return await this.nutritionnalVisitService.getNutritionnalVisit();
  }

  @Post()
  async addNutritionnalVist(
    @Body() nutritionnalVisit: NewNutritionnalVisitDto,
  ): Promise<NutritionnalVisitEntity> {
    return await this.nutritionnalVisitService.addNutritionnalVisit(
      nutritionnalVisit,
    );
  }
  @Patch(`/:id`)
  async updateNutritionnalVisit(
    @Param('id', ParseIntPipe) id: number,
    @Body() nutritionnalVisit: UpdateNutritionnalVisitDto,
  ): Promise<NutritionnalVisitEntity> {
    return await this.nutritionnalVisitService.updateNutritionnalVisit(
      id,
      nutritionnalVisit,
    );
  }
  @Delete('/:id')
  async deleteNutritionnalVisit(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<NutritionnalVisitEntity> {
    return await this.nutritionnalVisitService.deleteNutritionnalVisit(id);
  }
}
