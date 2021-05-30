var str= "Hello World";
function count (str) { 
    var count = {};    
    var removedspace = str.split(" ").join("");    
    var resultArray = removedspace.toLowerCase(); 
  resultArray.split('').forEach(function(s) {       
      count[s] ? count[s]++ : count[s] = 1;    
                                             });    
                             return count;   
                          } 
 console.log(count(str));
  