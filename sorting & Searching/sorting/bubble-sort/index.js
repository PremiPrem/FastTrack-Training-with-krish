const { bubbleSort } = require('./bubbleSort')

const arr = [17,3,9,5,7,19,26];
console.log("array: ", arr)

let sortedArr = bubbleSort(arr);
console.log(sortedArr)