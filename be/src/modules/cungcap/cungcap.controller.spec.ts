import { Test, TestingModule } from '@nestjs/testing';
import { CungcapController } from './cungcap.controller';
import { CungcapService } from './cungcap.service';

describe('CungcapController', () => {
  let controller: CungcapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CungcapController],
      providers: [CungcapService],
    }).compile();

    controller = module.get<CungcapController>(CungcapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
