import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { ModeArriveeEntity } from './entities/mode-arrivee.entity';
import { ModeArriveeService } from './mode-arrivee.service';

@Controller('mode-arrivee')
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
}
