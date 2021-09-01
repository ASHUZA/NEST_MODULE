import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeArriveeEntity } from './entities/mode-arrivee.entity';

@Injectable()
export class ModeArriveeService {
    constructor(
        @InjectRepository(ModeArriveeEntity)
        private ModeArriveeRepository: Repository<ModeArriveeEntity>,
    ){}

    async findModeArriveeById(id: number){
        const mode_arrivee = await this.ModeArriveeRepository.findOne(id);
        if (!mode_arrivee){
            throw new NotFoundException(`Le mode d'arrivee d'id ${id} n'existe pas.`);
        }
        return mode_arrivee;
    }
    async getMode_arrivees(): Promise<ModeArriveeEntity[]>{
        return await this.ModeArriveeRepository.find();
    }
async getMode_arroiveeById(id: number): Promise<ModeArriveeEntity>{
    return await this.findModeArriveeById(id);
}
 
}
