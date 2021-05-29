const { mergeSort } = require('./mergeSort')

const arr = [7,9,4,13,34,26];
console.log("array: ", arr);

let sortedArr = mergeSort(arr);
console.log(sortedArr);