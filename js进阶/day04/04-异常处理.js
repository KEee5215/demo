function fn(x, y) {
  if (!x || !y) {
    throw new Error("参数不能为空");
  }
  return x + y;
}
console.log(fn());
