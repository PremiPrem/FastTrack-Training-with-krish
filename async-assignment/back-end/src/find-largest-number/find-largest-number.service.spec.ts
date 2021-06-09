import { Test, TestingModule } from '@nestjs/testing';
import { FindLargestNumberService } from './find-largest-number.service';

describe('FindLargestNumberService', () => {
  let service: FindLargestNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindLargestNumberService],
    }).compile();

    service = module.get<FindLargestNumberService>(FindLargestNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
