/* 变量声明 */
var number1 = 0;
let number2 = 0;
/* 常量声明 常量不可修改 */
const number3 = 0;

console.log(number1);
console.log(number2);
console.log(number3);

function doVarSomething() {
    /* var 会在内存中存在,作用域不明显,直到永远 */
    for (var i = 0; i < 5; i++) {
        console.log('循环内 i: ', i);
    }
    console.log('循环外 i: ', i);
}

console.log('doVarSomething: ');
doVarSomething();

function doLetSomething() {
    /* let 会有明确的区块作用域 */
    for (let i = 0; i < 5; i++) {
        console.log('循环内 i: ', i);
    }
    /* 未解析的变量或类型 i  */
    // console.log('循环外 i: ', i);
}

console.log('doLetSomething: ');
doLetSomething();