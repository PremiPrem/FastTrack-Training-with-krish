var str= "I am premisha";

function count (str) {  
    var count = {};
    var removedspace= str.split(" ").join("");
    removedspace.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;

  }
 // console.log(str.split(" ").join(""));
  console.log(count("I am premisha"));

  