import { Test, TestingModule } from '@nestjs/testing';
import { CtOrderController } from './ct_order.controller';
import { CtOrderService } from './ct_order.service';

describe('CtOrderController', () => {
  let controller: CtOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtOrderController],
      providers: [CtOrderService],
    }).compile();

    controller = module.get<CtOrderController>(CtOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
