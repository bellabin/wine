import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieunhapService } from './ct_phieunhap.service';

describe('CtPhieunhapService', () => {
  let service: CtPhieunhapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtPhieunhapService],
    }).compile();

    service = module.get<CtPhieunhapService>(CtPhieunhapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
