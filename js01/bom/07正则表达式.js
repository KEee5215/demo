// const str = /哈/;
// console.log(str.test("哈哈"));
// console.log(str.test("二哈"));
// console.log(str.test("不嘻嘻"));

// console.log("-------------------------------------");

// // ^以哈开头
// const str1 = /^哈/;
// console.log(str1.test("哈哈"));
// console.log(str1.test("二哈"));
// console.log(str1.test("不嘻嘻"));

// console.log("-------------------------------------");

// // $以哈结尾
// const str2 = /哈$/;
// console.log(str2.test("哈哈"));
// console.log(str2.test("二哈"));
// console.log(str2.test("哈二"));
// console.log(/^哈$/.test("哈某哈")); //精确匹配,只能匹配一个哈字

//量词
// *匹配0个或多个
console.log(/^哈*$/.test("哈哈哈"));
console.log(/^哈*$/.test(""));
// +匹配1个或多个
console.log(/^哈+$/.test("哈哈"));
console.log(/^哈+$/.test(""));
console.log(/^哈+$/.test("哈"));

// ?匹配0个或1个
// {n}匹配n个
// {n,}匹配n个或更多
// {n,m}匹配n到m个
// \d匹配数字
// \D匹配非数字
// \w匹配字母数字下划线
// \W匹配非字母数字下划线
// \s匹配空白字符
