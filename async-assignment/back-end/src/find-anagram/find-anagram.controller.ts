import { Body, Controller,  Post } from '@nestjs/common';
import { resolve } from 'path';
import { FindAnagramService } from './find-anagram.service';

@Controller('api')
export class FindAnagramController {
    constructor(private service:FindAnagramService){}

    @Post('find-anagram')
    findAnagram(@Body() text: any): Promise<string>{
           
             return this.service.anagramWord(text);
           
    }
   
   
    
}
