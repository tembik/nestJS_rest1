import { Test, TestingModule } from '@nestjs/testing';
import { PenjualController } from './penjual.controller';

describe('PenjualController', () => {
  let controller: PenjualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenjualController],
    }).compile();

    controller = module.get<PenjualController>(PenjualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
