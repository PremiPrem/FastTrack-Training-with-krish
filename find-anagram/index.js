//const { anagrams } = require('./anagrams');

function anagrams(stringA, stringB) {
    if (cleanString(stringA) === cleanString(stringB))
    {
        return console.log("These words are anagram");
    }
    
    else{
        return console.log("These words aren't anagram");
    }
    
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
    
}   

// module.exports ={anagrams};
console.log(anagrams('monk','Komn'));