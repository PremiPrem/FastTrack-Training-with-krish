import { Injectable } from '@nestjs/common';

@Injectable()
export class FindWordOccuranceService {

   //Promise
    findOccuranceOfWord(text): Promise<any>{
            var str= text.sentence;
            var numberOfSingleSpace;
            var count = {}; 
            function countCharecters (str) { 
                
                var removedspace = str.split(" ").join("");    
                var resultArray = removedspace.toLowerCase(); 
                
                resultArray.split('').forEach(function(s) {       
                    count[s] ? count[s]++ : count[s] = 1;    
                });    

                numberOfSingleSpace = totalNumberOfSingleSpaces(str," ");
            
                getSpaceString(numberOfSingleSpace);
                count["space 1"] = numberOfSingleSpace;

                return count;   
            } 

            function countOccurences(string, word) {
                return string.split(word).length - 1;
            }

            function totalNumberOfSingleSpaces(string, singleSpace) {
                return string.split(singleSpace).length - 1;
            }


            var spacei = "";
            function getSpaceString(integer) {
                var i;
                for (i = integer; i > 1; i--) {
                    var space=" ";
                    for (let j = 1; j <= i; j++) {
                        spacei  = spacei + space;                
                    }
                
                var  numberOfSpace = countOccurences(str, spacei);
                    str= str.split(spacei).pop();
            
                    var spaceName= "Space"+" "+i;
                    if(numberOfSpace!=0){
                        count[spaceName] = numberOfSpace;
                    }
                    numberOfSingleSpace=numberOfSingleSpace-(numberOfSpace*i);
                
                    spacei="";
                }
            }        
           var result= countCharecters(str) ;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(result); 
                }, 2000);
              });
    }
}
