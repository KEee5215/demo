function Pig(name) {
  this.name = name;
}

Pig.age = 18; //静态成员/静态属性

Pig.run = function () {
  //静态方法
  console.log("run");
};

const pig = new Pig("tom");

Pig.run();
console.log(Pig.age); //只能用构造函数名来访问,无法用对象实例来访问
