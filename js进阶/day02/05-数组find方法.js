const data = [
  {
    band: "xiaomi",
    price: 1000,
    color: "red",
  },
  {
    band: "apple",
    price: 3000,
    color: "white",
  },
  {
    band: "huawei",
    price: 2000,
    color: "black",
  },
];

//找到band为apple的手机
const result = data.find((item) => item.band === "apple");
console.log(result);
