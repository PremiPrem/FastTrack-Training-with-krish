const { selectionSort } = require('./selectionSort')

const arr = [17,6,30,8,9,27,19,26];
console.log("array: ", arr);

let sortedArr = selectionSort(arr);
console.log("Sorted array", sortedArr);