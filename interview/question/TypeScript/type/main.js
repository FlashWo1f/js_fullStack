// tsc --watch main.ts
var decLiteral = 1;
// decLiteral = '12321'
var hexLiteral = 0xf00d;
var user_name = 'Bob';
var sentence = "Hello, my name is " + user_name;
var list = [1, 2, 3];
// 泛型 Array<number>
var list2 = [1, 2, 3];
function div(x) {
    // isFinite 原生判断是否是无穷大
    if (isFinite(1000 / x)) {
        return 'Number is NOT Infinity';
    }
    return 'Number is Infinity';
}
console.log(div(0));
