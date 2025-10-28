// 箭头函数
const fn = () => {
  console.log("箭头函数");
};

const fn1 = () => {
  console.log("箭头函数");
};

//箭头函数可以直接返回一个对象;需要用小括号包裹
const fn2 = () => ({
  name: "jack",
});

console.log("==========");
console.log(this);
