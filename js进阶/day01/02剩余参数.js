// 剩余参数

function fn(...arr) {
  console.log(arr);
}

fn(1, 2, 3, 4, 5);

// 与动态参数arguments的区别
// arguments是伪数组
// 剩余参数是真数组
