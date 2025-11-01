//通过原型进行继承

const Person = {
  nose: 1,
  eyes: 2,
};

const Man = function () {};

Man.prototype = Person;
Man.prototype.constructor = Man; //修改constructor

const keyi = new Man();

console.log(keyi.__proto__);
