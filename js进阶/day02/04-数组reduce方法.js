const arr = [2, 6, 4];

const a = arr.reduce(function (prev, current) {
  return prev + current;
}, 10);

console.log(a);
