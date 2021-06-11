import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAnagramService {


    //async await
    async anagramWord(text): Promise<string>{
        let stringA = text.firstText;
        let stringB = text.secondText;

        var  word1= await stringA.replace(/[^\w]/g).toLowerCase().split('').sort().join();
       var word2= await stringB.replace(/[^\w]/g).toLowerCase().split('').sort().join()
        if (word1 === word2)
        {
            return "These words are anagram";
        }
            
        else{
            return "These words aren't anagram";
        }  
    }

   

}
