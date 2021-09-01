import { Controller, Get, ParseIntPipe, Param, Patch, Delete, Body, Post } from '@nestjs/common';
import { NewModeArriveeDto } from './dto/new_mode_arrivee_dto';
import { ModeArriveeEntity } from './entities/mode-arrivee.entity';
import { ModeArriveeService } from './mode-arrivee.service';

@Controller('mode_arrivee')
export class ModeArriveeController {
    constructor(private ModeArriveeService: ModeArriveeService) {}

    @Get()
    async getAllModeArrivees(): Promise<ModeArriveeEntity[]>{
        return await this.ModeArriveeService.getMode_arrivees();
    }
    @Get('/:id')
    async getModeArriveeById(@Param('id', ParseIntPipe) id: number){
        return await this.ModeArriveeService.getMode_arroiveeById(id);
    }
    @Post()
    async addModeArrivee(
        @Body() ModeArrivee: NewModeArriveeDto,
    ): Promise<ModeArriveeEntity> {
        return await this.ModeArriveeService.addModeArrivee(ModeArrivee);
    }
    @Patch('/:id')
    async updateModeArrivee(
        @Param('id', ParseIntPipe) id: number,
        @Body() ModeArrivee: NewModeArriveeDto,
    ): Promise<ModeArriveeEntity> {
        return await this.ModeArriveeService.updateModeArrivee(
            id,
            ModeArrivee,
        );
    }
    @Delete('/:id')
    async deleteModeArrivee(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<ModeArriveeEntity> {
        return await this.ModeArriveeService.deleteModeArrivee(id);
    }
}
