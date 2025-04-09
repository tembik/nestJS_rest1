import { Test, TestingModule } from '@nestjs/testing';
import { PenjualService } from './penjual.service';

describe('PenjualService', () => {
  let service: PenjualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenjualService],
    }).compile();

    service = module.get<PenjualService>(PenjualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
