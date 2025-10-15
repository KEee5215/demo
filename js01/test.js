let n = 1;

function fn1() {
  function fn2() {
    console.log(n);
  }
  fn2();
}

function fn3() {
  let n = 3;
  fn1();
}

fn3();
