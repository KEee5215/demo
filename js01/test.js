function mixArgs(a, b = 2) {
    'use strict';
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  a = "alpha";
  b = "beta";
  console.log(arguments[0]);
  console.log(arguments[1]);
}
mixArgs(1, 2);
