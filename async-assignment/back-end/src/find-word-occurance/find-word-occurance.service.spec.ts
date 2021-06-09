import { Test, TestingModule } from '@nestjs/testing';
import { FindWordOccuranceService } from './find-word-occurance.service';

describe('FindWordOccuranceService', () => {
  let service: FindWordOccuranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindWordOccuranceService],
    }).compile();

    service = module.get<FindWordOccuranceService>(FindWordOccuranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
