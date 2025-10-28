//典型运用场景
//1.求数组中元素的最大值和最小值
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var max = Math.max(...arr);
var min = Math.min(...arr);

console.log(max, min);

//2.合并数组
const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
const a = 1;

const arr3 = [...arr1, 1];

console.log(arr3);
