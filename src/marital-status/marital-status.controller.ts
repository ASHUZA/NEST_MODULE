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
import { NewMaritalStatusDto } from './dto/new_marital_status_dto';
import { MaritalStatusEntity } from './entities/marital-status.entity';
import { MaritalStatusService } from './marital-status.service';

@Controller('marital-status')
export class MaritalStatusController {
  constructor(private maritalStatusService: MaritalStatusService) {}
  @Get()
  async getAllMaritalStatuses(): Promise<MaritalStatusEntity[]> {
    return await this.maritalStatusService.getMaritalStatuses();
  }
  @Get('/:id')
  async getMaritalStatus(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MaritalStatusEntity> {
    return await this.maritalStatusService.getMaritalStatus(id);
  }
  @Post()
  async addMaritalStatus(
    @Body() maritalStatus: NewMaritalStatusDto,
  ): Promise<MaritalStatusEntity> {
    return await this.maritalStatusService.addMaritalStatus(maritalStatus);
  }
  @Patch('/:id')
  async updateMaritalStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() maritalStatus: NewMaritalStatusDto,
  ): Promise<MaritalStatusEntity> {
    return await this.maritalStatusService.updateMaritalStatus(
      id,
      maritalStatus,
    );
  }
  @Delete('/:id')
  async deleteMaritalStatus(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MaritalStatusEntity> {
    return await this.maritalStatusService.deleteMaritalStatus(id);
  }
}
