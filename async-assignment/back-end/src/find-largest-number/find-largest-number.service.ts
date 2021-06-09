import { Injectable } from '@nestjs/common';

@Injectable()
export class FindLargestNumberService {
    findnthNumber(number){
        var arr= number.array;
        var index = number.index;
        
        var arrsort= arr.sort(function(a, b){return b-a});
        return (arrsort[index-1]);
    }

}
