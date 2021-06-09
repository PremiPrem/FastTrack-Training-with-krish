import { Test, TestingModule } from '@nestjs/testing';
import { FindAnagramService } from './find-anagram.service';

describe('FindAnagramService', () => {
  let service: FindAnagramService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAnagramService],
    }).compile();

    service = module.get<FindAnagramService>(FindAnagramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
