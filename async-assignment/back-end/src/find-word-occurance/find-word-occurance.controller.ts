import { Body, Controller, Post } from '@nestjs/common';
import { FindWordOccuranceService } from './find-word-occurance.service';

@Controller('api')
export class FindWordOccuranceController {
    constructor(private service:FindWordOccuranceService){}

    @Post('find-word-occurance')
   findWordOccurance(@Body() text: any){ 
            const result= this.service. findOccuranceOfWord(text);
             return result;
    }
    
}
