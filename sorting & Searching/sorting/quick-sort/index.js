const { quickSort } = require('./quickSort')

const arr = [17,32,19,5,7,19,26];
console.log("array: ", arr);

let sortedArr = quickSort(arr);
console.log("Sorted array", sortedArr);