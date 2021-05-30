// unsorted sequence
var array = [7,1,2,5,3,6];

var sum1 = 0;
var max = array[0];
var length = array.length;

// get total of the sequence
array.forEach((item) => {
    if (item > max)
        max = item;

  sum1 += item;
});

var min = max - length;
var count = min;
var sum2 = 0

// count expected total
while (count <= max) {
    sum2 += count;
    count++;
}

console.log('Missing number is: ', sum2 - sum1)


