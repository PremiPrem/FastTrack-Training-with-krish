import { Test, TestingModule } from '@nestjs/testing';
import { FindWordOccuranceController } from './find-word-occurance.controller';

describe('FindWordOccuranceController', () => {
  let controller: FindWordOccuranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindWordOccuranceController],
    }).compile();

    controller = module.get<FindWordOccuranceController>(FindWordOccuranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
