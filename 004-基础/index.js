/* 声明一个变量 a 同时指定类型为 number */
var a;
/* 在以后的使用中 a 的类型只能是数字 */
a = 10;
/* 分配的表达式类型 "hello" 不可分配给类型 number  */
// a = 'hello';
var b;
b = 'hello';
// b = 1
/* 声明完变量直接赋值 */
// let c: boolean = true;
/* 如果变量的声明和赋值是同时进行,TS 可以自动对变量进行类型的检测 */
var c = true;
/* JS 中是不考虑函数参数的类型和个数的 */
function sum(a, b) {
    return a + b;
}
// console.log(sum(123, 456));
console.log(sum(123, '456'));
