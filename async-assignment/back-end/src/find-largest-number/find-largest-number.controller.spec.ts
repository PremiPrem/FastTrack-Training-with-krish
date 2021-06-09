import { Test, TestingModule } from '@nestjs/testing';
import { FindLargestNumberController } from './find-largest-number.controller';

describe('FindLargestNumberController', () => {
  let controller: FindLargestNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindLargestNumberController],
    }).compile();

    controller = module.get<FindLargestNumberController>(FindLargestNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
