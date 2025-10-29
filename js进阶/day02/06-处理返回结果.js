const data1 = {
  code: 0,
  message: "success",
  data: [
    {
      id: 1,
      name: "iPhone 11",
      band: "apple",
      price: 6999,
    },
    {
      id: 2,
      name: "iPhone 11 Pro",
      band: "apple",
      price: 8999,
    },
  ],
};

const { data } = data1; //数组,元素是对象

console.log(data);

data.forEach((item) => {
  //对数组的元素进行遍历
  const res = Object.values(item).join("/"); //对象中获取全部值的方法,再对数组拼接
  console.log(res);
});
