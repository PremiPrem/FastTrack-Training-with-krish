import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAnagramService {

    anagramWord(text){
        let stringA = text.firstText;
        let stringB = text.secondText;

    
        if (this.cleanString(stringA) === this.cleanString(stringB))
        {
            return "These words are anagram";
        }
            
        else{
            return "These words aren't anagram";
        }  
    }

    cleanString(str) {
        return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
        
    } 

}
