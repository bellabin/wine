import { Test, TestingModule } from '@nestjs/testing';
import { WinetypeService } from './winetype.service';

describe('WinetypeService', () => {
  let service: WinetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WinetypeService],
    }).compile();

    service = module.get<WinetypeService>(WinetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
