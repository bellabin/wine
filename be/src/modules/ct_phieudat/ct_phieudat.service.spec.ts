import { Test, TestingModule } from '@nestjs/testing';
import { CtPhieudatService } from './ct_phieudat.service';

describe('CtPhieudatService', () => {
  let service: CtPhieudatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtPhieudatService],
    }).compile();

    service = module.get<CtPhieudatService>(CtPhieudatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
