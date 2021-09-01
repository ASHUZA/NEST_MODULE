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
import { ContraceptionService } from './contraception.service';
import { NewContraceptionDto } from './dto/newContraceptionDto';
import { UpdateContraceptionDto } from './dto/updateContraceptionDto';
import { ContraceptionEntity } from './entities/contraception.entity';

@Controller('contraception')
export class ContraceptionController {
  constructor(private contraceptionService: ContraceptionService) {}

  @Get()
  async getAllContraceptions(): Promise<ContraceptionEntity[]> {
    return await this.contraceptionService.getContraceptions();
  }

  @Get('/:id')
  async getContraceptionById(@Param('id', ParseIntPipe) id: number) {
    return await this.contraceptionService.getContraceptionById(id);
  }

  @Post()
  async addContraceptions(
    @Body() Contraception: NewContraceptionDto,
  ): Promise<ContraceptionEntity> {
    return await this.contraceptionService.addContraception(Contraception);
  }

  @Patch('/:id')
  async updateContraception(
    @Param('id', ParseIntPipe) id: number,
    @Body() contraception: UpdateContraceptionDto,
  ): Promise<ContraceptionEntity> {
    return await this.contraceptionService.updateContraception(
      id,
      contraception,
    );
  }

  @Delete('/:id')
  async deleteContraception(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ContraceptionEntity> {
    return await this.contraceptionService.deleteContraception(id);
  }
}
