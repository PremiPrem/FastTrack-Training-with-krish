const { linearSearch } = require('./linearsearch')

const arr = [2,8,11,5,4,27,18,9,35];
console.log("Element array: ", arr)

let index = linearSearch(arr,5); // returns index of the item
console.log('index of 5 is ',index)

