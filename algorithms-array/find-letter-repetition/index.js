var str= "I am premisha";
// console.log(str.toLowerCase());

// console.log(str.toLowerCase().split(''));
// console.log(str.toLowerCase().split('').join(""));
// console.log(str.split(" ").join(""));

function count (str) {  
    var count = {};
    
  str.toLowerCase().join("").split(" ").forEach(function(s) {

       count[s] ? count[s]++ : count[s] = 1;  
       console.log(count)
    });
    return count;

  }
 // console.log(str.split(" ").join(""));
  console.log(count("I am premisha"));

  