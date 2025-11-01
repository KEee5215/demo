const obj = {
  name: "why",
  age: 18,
};

function fn(x, y, z) {
  console.log(x, y, z);
}

// fn.call(obj);
// fn.apply(obj, [1, 2, 3]);

// 求最大值
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const max = Math.max.apply(null, arr);
// console.log(max);

// bind改变this指向,会返回一个函数,但是this是改变过的
//不会立即执行函数
const fn2 = fn.bind(obj);
fn2(4, 5, 6);
console.log(fn2);
