import { Test, TestingModule } from '@nestjs/testing';
import { ModeArriveeService } from './mode-arrivee.service';

describe('ModeArriveeService', () => {
  let service: ModeArriveeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeArriveeService],
    }).compile();

    service = module.get<ModeArriveeService>(ModeArriveeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
