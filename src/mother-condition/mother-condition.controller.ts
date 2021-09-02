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
import { NewMotherConditionDto } from './dto/new_mother_condition_dto';
import { MotherConditionEntity } from './entities/mother-condition.entity';
import { MotherConditionService } from './mother-condition.service';

@Controller('condition-mere')
export class MotherConditionController {
  constructor(private motherConditionService: MotherConditionService) {}

  @Get()
  async getAllMotherCondition(): Promise<MotherConditionEntity[]> {
    return await this.motherConditionService.getMotherConditions();
  }

  @Get('/:id')
  async getMotherConditionById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MotherConditionEntity> {
    return await this.motherConditionService.getMotherConditionById(id);
  }

  @Post()
  async addMotherCondition(
    @Body() motherCondition: NewMotherConditionDto,
  ): Promise<MotherConditionEntity> {
    return await this.motherConditionService.addMotherCondition(
      motherCondition,
    );
  }

  @Patch('/:id')
  async updateMotherCondition(
    @Param('id', ParseIntPipe) id: number,
    @Body() motherCondition: NewMotherConditionDto,
  ): Promise<MotherConditionEntity> {
    return await this.motherConditionService.updateMotherCondition(
      id,
      motherCondition,
    );
  }

  @Delete('/:id')
  async deleteMotherCondition(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MotherConditionEntity> {
    return await this.motherConditionService.deleteMotherCondition(id);
  }
}
