const girl = {
  name: "lily",
  age: 18,
};

// 获取对象中的属性
console.log(Object.keys(girl)); //[ 'name', 'age' ]
// 获取对象中的属性值
console.log(Object.values(girl)); //[ 'lily', 18 ]
// 获取对象中的属性和属性值
console.log(Object.entries(girl)); // [ [ 'name', 'lily' ], [ 'age', 18 ] ]

const oo = {};
// 对象合并,追加
Object.assign(oo, girl);

console.log(oo);
