const { binarySearch } = require('./binarysearch')

// Sorted array
const arr = [9,3,25,11,7,19,20,12];
console.log("Element array: ", arr)

let index = binarySearch(arr, 12); // returns index of the item
console.log('index of 12 is ', index)


