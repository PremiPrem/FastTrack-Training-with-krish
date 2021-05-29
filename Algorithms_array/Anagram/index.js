//const { anagrams } = require('./anagrams');

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

// module.exports ={anagrams};
console.log(anagrams('monk','komn'));