import { Test, TestingModule } from '@nestjs/testing';
import { TrademarksController } from './trademarks.controller';

describe('TrademarksController', () => {
  let controller: TrademarksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrademarksController],
    }).compile();

    controller = module.get<TrademarksController>(TrademarksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
