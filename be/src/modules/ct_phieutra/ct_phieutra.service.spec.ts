import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieutraService } from './ct_phieutra.service';

describe('CtPhieutraService', () => {
  let service: CtPhieutraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtPhieutraService],
    }).compile();

    service = module.get<CtPhieutraService>(CtPhieutraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
