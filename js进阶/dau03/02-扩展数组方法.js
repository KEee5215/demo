//写一个数字数组求和的方法

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};
//求数组最大值
Array.prototype.max = function () {
  return Math.max(...this);
};
Array.prototype.min = function () {
  return Math.min(...this);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.sum());
