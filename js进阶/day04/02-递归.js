let i = 1;
function fn() {
  console.log(i);
  if (i > 5) return;
  i++;
  fn();
}
fn();
