import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FindLargestNumberService } from './find-largest-number.service';

@Controller('api')
export class FindLargestNumberController {
    
    constructor(private service:FindLargestNumberService){

    }

    @Post('find-largest-number')
    findLargestNumber(@Body() number: []){
             return this.service.findnthNumber(number);
            
    }
}
