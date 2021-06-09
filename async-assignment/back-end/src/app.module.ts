import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindAnagramModule } from './find-anagram/find-anagram.module';
import { FindWordOccuranceModule } from './find-word-occurance/find-word-occurance.module';
import { FindLargestNumberModule } from './find-largest-number/find-largest-number.module';

@Module({
  imports: [FindAnagramModule, FindWordOccuranceModule, FindLargestNumberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
