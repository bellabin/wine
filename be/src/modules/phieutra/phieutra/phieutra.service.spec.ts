import { Test, TestingModule } from '@nestjs/testing';
import { PhieutraService } from './phieutra.service';

describe('PhieutraService', () => {
  let service: PhieutraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieutraService],
    }).compile();

    service = module.get<PhieutraService>(PhieutraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
