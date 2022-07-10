import { Test, TestingModule } from '@nestjs/testing';
import { PhieunhapController } from './phieunhap.controller';

describe('PhieunhapController', () => {
  let controller: PhieunhapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieunhapController],
    }).compile();

    controller = module.get<PhieunhapController>(PhieunhapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
