import { Test, TestingModule } from '@nestjs/testing';
import { CtOrderService } from './ct_order.service';

describe('CtOrderService', () => {
  let service: CtOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtOrderService],
    }).compile();

    service = module.get<CtOrderService>(CtOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
