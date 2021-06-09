import { Body, Controller,  Post } from '@nestjs/common';
import { FindAnagramService } from './find-anagram.service';

@Controller('api')
export class FindAnagramController {
    constructor(private service:FindAnagramService){}

    @Post('find-anagram')
    async findAnagram(@Body() text: any){
            console.log(text);
             return await this.service. anagramWord(text);
           
    }

    
    
}
