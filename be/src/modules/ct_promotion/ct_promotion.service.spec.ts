import { Test, TestingModule } from '@nestjs/testing';
import { CtPromotionService } from './ct_promotion.service';

describe('CtPromotionService', () => {
  let service: CtPromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtPromotionService],
    }).compile();

    service = module.get<CtPromotionService>(CtPromotionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
