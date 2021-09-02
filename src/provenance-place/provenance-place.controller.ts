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
import { NewProvenancePlaceDto } from './dto/new_provenance_place_dto';
import { ProvenancePlaceEntity } from './entities/provenance-place.entity';
import { ProvenancePlaceService } from './provenance-place.service';

@Controller('provenance-place')
export class ProvenancePlaceController {
  constructor(private provenancePlaceService: ProvenancePlaceService) {}

  @Get()
  async getAllProvenancePlace(): Promise<ProvenancePlaceEntity[]> {
    return await this.provenancePlaceService.getProvenancePlace();
  }
  @Get('/:id')
  async getProvenancePlaceById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvenancePlaceEntity> {
    return await this.provenancePlaceService.getProvenancePlaceById(id);
  }
  @Post()
  async addProvenancePlace(
    @Body() provenancePlace: NewProvenancePlaceDto,
  ): Promise<ProvenancePlaceEntity> {
    return await this.provenancePlaceService.addProvenancePlace(
      provenancePlace,
    );
  }
  @Patch('/:id')
  async updateProvenancePlace(
    @Param('id', ParseIntPipe) id: number,
    @Body() provenancePlace: NewProvenancePlaceDto,
  ): Promise<ProvenancePlaceEntity> {
    return await this.provenancePlaceService.updateProvenancePlace(
      id,
      provenancePlace,
    );
  }
  @Delete('/:id')
  async deleteProvenancePlace(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvenancePlaceEntity> {
    return await this.provenancePlaceService.deleteProvenacePlace(id);
  }
}
