import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieudatController } from './ct_phieudat.controller';
import { CtPhieudatService } from './ct_phieudat.service';

describe('CtPhieudatController', () => {
  let controller: CtPhieudatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtPhieudatController],
      providers: [CtPhieudatService],
    }).compile();

    controller = module.get<CtPhieudatController>(CtPhieudatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
