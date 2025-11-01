//人共有的属性,两个眼睛,一个鼻子
function Person() {
  this.eyes = 2;
  this.nose = 1;
}

//创建男人女人
function Man() {}
Man.prototype = new Person();
Man.prototype.constructor = Man;
Man.prototype.sing = function () {
  console.log("sing123");
};
function Woman() {}

const man = new Man();

man.sing();
console.log(man.eyes);
