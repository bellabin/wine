import { Test, TestingModule } from '@nestjs/testing';
import { ChangepriceController } from './changeprice.controller';
import { ChangepriceService } from './changeprice.service';

describe('ChangepriceController', () => {
  let controller: ChangepriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangepriceController],
      providers: [ChangepriceService],
    }).compile();

    controller = module.get<ChangepriceController>(ChangepriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
