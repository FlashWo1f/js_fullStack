var a = 1

function c () {
  var a = 2;
  b();
}

function b () {
  console.log(a);
}
c();