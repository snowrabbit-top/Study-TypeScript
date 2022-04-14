/* 变量声明 */
var number1 = 0;
var number2 = 0;
/* 常量声明 常量不可修改 */
var number3 = 0;
console.log(number1);
console.log(number2);
console.log(number3);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log('循环内 i: ', i);
    }
    console.log('循环外 i: ', i);
}
doSomething();
