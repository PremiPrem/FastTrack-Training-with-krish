import { Module } from '@nestjs/common';
import { FindAnagramController } from './find-anagram.controller';
import { FindAnagramService } from './find-anagram.service';

@Module({
  controllers: [FindAnagramController],
  providers: [FindAnagramService]
})
export class FindAnagramModule {}
