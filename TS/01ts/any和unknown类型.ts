// 在文件顶部或底部添加任意一个即可
export {}; // 空导出，将文件标记为模块

//使用any来声明变量
let a: any = 123;
let a1: any = "123";
let a2: any = true;
let a3: any = [];
let a4: any = {};

// 使用unknown来声明变量
let b: unknown = 123;
let b1: unknown = "123";
let b2: unknown = true;
let b3: unknown = [];
let b4: unknown = {};

if (typeof b === "number") {
  b + 1; //类型缩小后可以进行加减操作
}
