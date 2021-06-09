import { Test, TestingModule } from '@nestjs/testing';
import { FindAnagramController } from './find-anagram.controller';

describe('FindAnagramController', () => {
  let controller: FindAnagramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAnagramController],
    }).compile();

    controller = module.get<FindAnagramController>(FindAnagramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
