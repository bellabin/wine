import { Test, TestingModule } from '@nestjs/testing';
import { ChangepriceService } from './changeprice.service';

describe('ChangepriceService', () => {
  let service: ChangepriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangepriceService],
    }).compile();

    service = module.get<ChangepriceService>(ChangepriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
