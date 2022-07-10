import { Test, TestingModule } from '@nestjs/testing';
import { WinetypeController } from './winetype.controller';

describe('WinetypeController', () => {
  let controller: WinetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WinetypeController],
    }).compile();

    controller = module.get<WinetypeController>(WinetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
