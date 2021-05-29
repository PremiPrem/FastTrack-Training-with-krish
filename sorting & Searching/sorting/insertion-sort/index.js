const { insertionSort } = require('./insertionSort')

const arr = [17,3,9,5,7,19,26];
console.log("array: ", arr)

let sortedArr = insertionSort(arr);
console.log(sortedArr)