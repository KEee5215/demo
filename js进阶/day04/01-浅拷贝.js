const obj = {
  name: "why",
  age: 18,
  family: {
    baby: 2,
  },
};

//方法1
// const o = { ...obj };
// console.log(o);
// o.age = 20;
// console.log(o);
// console.log(obj);

//方法2
const o = {};
Object.assign(o, obj);
o.age = 20;
o.family.baby = 3;

console.log(o);
console.log(obj); //把obj的family的baby也改了
