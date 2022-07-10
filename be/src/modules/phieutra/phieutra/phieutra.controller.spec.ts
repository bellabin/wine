import { Test, TestingModule } from '@nestjs/testing';
import { PhieutraController } from './phieutra.controller';

describe('PhieutraController', () => {
  let controller: PhieutraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieutraController],
    }).compile();

    controller = module.get<PhieutraController>(PhieutraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
