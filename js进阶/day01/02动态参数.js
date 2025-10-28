//求和函数,用户输入几个参数,就求和几个参数

function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const a = getSum(1, 2, 3, 4, 5);

console.log(a);
