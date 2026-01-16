// 在文件顶部或底部添加任意一个即可
export {}; // 空导出，将文件标记为模块

//写一个将number类型的数字转为字符串的方法

function toString(number: number): string {
  return String(number);
}

//使用
const a = 123;
// const b:number = "2";
// const a = "123";//会报错

console.log(toString(a));
