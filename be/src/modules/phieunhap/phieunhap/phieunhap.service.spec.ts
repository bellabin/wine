import { Test, TestingModule } from '@nestjs/testing';
import { PhieunhapService } from './phieunhap.service';

describe('PhieunhapService', () => {
  let service: PhieunhapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieunhapService],
    }).compile();

    service = module.get<PhieunhapService>(PhieunhapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
