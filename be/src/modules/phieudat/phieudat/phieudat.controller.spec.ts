import { Test, TestingModule } from '@nestjs/testing';
import { PhieudatController } from './phieudat.controller';

describe('PhieudatController', () => {
  let controller: PhieudatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieudatController],
    }).compile();

    controller = module.get<PhieudatController>(PhieudatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
