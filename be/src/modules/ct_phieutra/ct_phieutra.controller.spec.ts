import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieutraController } from './ct_phieutra.controller';
import { CtPhieutraService } from './ct_phieutra.service';

describe('CtPhieutraController', () => {
  let controller: CtPhieutraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtPhieutraController],
      providers: [CtPhieutraService],
    }).compile();

    controller = module.get<CtPhieutraController>(CtPhieutraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
