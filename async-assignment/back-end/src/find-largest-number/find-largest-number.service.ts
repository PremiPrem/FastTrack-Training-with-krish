import { Injectable } from '@nestjs/common';

@Injectable()

//callback
export class FindLargestNumberService {
    findnthNumber(number): any{
        var arr= number.array;
        var index = number.index;
        let arrsort=[]
       
    this.sortNumbers(arr, (result) => {
        arrsort = result;
      });
        return (arrsort[index-1]);
    }
//    sortNumbers(a, b,callback){
//         callback (b-a);
//     }
    sortNumbers(numbers: number[], callback) {

        for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {
    
            if (numbers[i] < numbers[j]) {
              // To swap elements
              [numbers[i], numbers[j]] = [numbers[j], numbers[i]]
            }
          }
        }
        callback(numbers);
      }
}
