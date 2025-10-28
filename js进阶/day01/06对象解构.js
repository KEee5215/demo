// const obj = {
//   name: "why",
//   age: 18,
//   height: 1.88,
// };

// const name = "keyi";

// const { name: username, age } = obj;

// console.log(username, age);

const pig = {
  name: "佩奇",
  age: 6,
};

const { name: uname, age } = pig;

console.log(uname, age);

const goods = [
  {
    goodsName: "小米",
    price: 1999,
    category: { no1: "手机", no2: "手表", no3: "汽车" },
  },
];

const [
  {
    goodsName,
    price,
    category: { no1, no2, no3 },
  },
] = goods;
console.log(goodsName, price, no1, no2, no3);
