import { Test, TestingModule } from '@nestjs/testing';
import { CungcapService } from './cungcap.service';

describe('CungcapService', () => {
  let service: CungcapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CungcapService],
    }).compile();

    service = module.get<CungcapService>(CungcapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
