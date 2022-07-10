import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieunhapController } from './ct_phieunhap.controller';
import { CtPhieunhapService } from './ct_phieunhap.service';

describe('CtPhieunhapController', () => {
  let controller: CtPhieunhapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtPhieunhapController],
      providers: [CtPhieunhapService],
    }).compile();

    controller = module.get<CtPhieunhapController>(CtPhieunhapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
