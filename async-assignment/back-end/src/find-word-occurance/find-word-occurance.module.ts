import { Module } from '@nestjs/common';
import { FindWordOccuranceController } from './find-word-occurance.controller';
import { FindWordOccuranceService } from './find-word-occurance.service';


@Module({
  controllers: [FindWordOccuranceController],
  providers: [FindWordOccuranceService]
})
export class FindWordOccuranceModule {}
