function User(uname, age) {
  this.uname = uname; //构造函数里面的this 指向实例对象u1/u2...
  this.age = age;
  //   this.sing = function () {
  //     //这样创建的函数，每个实例都会创建一个函数，会造成内存的浪费
  //     console.log("singing...");
  //   };
}

//应该创建一个函数，然后让所有的实例都共享这个函数
//应该挂载到原型对象上prototype
User.prototype.sing = function () {
  console.log("singing..."); //原型对象里面的this也指向实例对象u1/u2...
};

var u1 = new User("why", 18);
var u2 = new User("kobe", 30);

u1.sing(); //调用
u2.sing(); //调用
console.log(u1.sing === u2.sing);
