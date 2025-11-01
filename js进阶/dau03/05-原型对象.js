function Person() {
  this.name = "人";
}

const event = {
  eat: function () {
    console.log(this.name + "吃吃吃");
  },
  sleep: function () {
    console.log(this.name + "睡睡睡");
  },
};

Person.prototype = event;
Person.prototype.constructor = Person;

const person = new Person();
person.name = "张三";
// person.eat();

//对象原型 === 对象.__proto__  === 构造函数.prototype
const a = person.__proto__;
// console.log(a);
// console.log(Person.prototype === a);
const b = Person.prototype.__proto__;

// console.log(b === Object.prototype);

console.log(person instanceof Person);
console.log(person instanceof Object);
console.log([1, 2, 3] instanceof Person);
console.log([1, 23, 3] instanceof Array);
