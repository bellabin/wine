import { Test, TestingModule } from '@nestjs/testing';
import { CtPromotionController } from './ct_promotion.controller';
import { CtPromotionService } from './ct_promotion.service';

describe('CtPromotionController', () => {
  let controller: CtPromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtPromotionController],
      providers: [CtPromotionService],
    }).compile();

    controller = module.get<CtPromotionController>(CtPromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
