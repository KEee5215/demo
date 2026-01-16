export {};

const o1: Object = { foo: 0 };
const o2: object = { foo: 0 };

// toString()是对象的原生方法，可以正确访问。foo是自定义属性，访问就会报错。

o1.toString(); // 正确
// o1.foo; // 报错

o2.toString(); // 正确
// o2.foo; // 报错
