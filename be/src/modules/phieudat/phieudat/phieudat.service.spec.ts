import { Test, TestingModule } from '@nestjs/testing';
import { PhieudatService } from './phieudat.service';

describe('PhieudatService', () => {
  let service: PhieudatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieudatService],
    }).compile();

    service = module.get<PhieudatService>(PhieudatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
