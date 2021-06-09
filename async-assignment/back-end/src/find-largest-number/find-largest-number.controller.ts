import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FindLargestNumberService } from './find-largest-number.service';

@Controller('api')
export class FindLargestNumberController {
    
    constructor(private service:FindLargestNumberService){

    }

    @Post('find-largest-number')
    async findLargestNumber(@Body() number: []){
             return await this.service.findnthNumber(number);
            
    }
}
