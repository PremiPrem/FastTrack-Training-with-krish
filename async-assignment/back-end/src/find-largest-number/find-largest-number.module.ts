import { Module } from '@nestjs/common';
import { FindLargestNumberController } from './find-largest-number.controller';
import { FindLargestNumberService } from './find-largest-number.service';

@Module({
  controllers: [FindLargestNumberController],
  providers: [FindLargestNumberService]
})
export class FindLargestNumberModule {}
