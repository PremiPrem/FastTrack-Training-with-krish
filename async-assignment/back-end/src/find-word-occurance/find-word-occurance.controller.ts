import { Body, Controller, Post } from '@nestjs/common';
import { FindWordOccuranceService } from './find-word-occurance.service';

@Controller('api')
export class FindWordOccuranceController {
    constructor(private service:FindWordOccuranceService){}

    @Post('find-word-occurance')
    async findWordOccurance(@Body() text: any){ 
            const result= await this.service. findOccuranceOfWord(text);
             return result;
    }
}
