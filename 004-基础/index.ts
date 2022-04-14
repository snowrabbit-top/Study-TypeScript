/* 声明一个变量 a 同时指定类型为 number */
let a: number;
/* 在以后的使用中 a 的类型只能是数字 */
a = 10;
/* 分配的表达式类型 "hello" 不可分配给类型 number  */
// a = 'hello';

let b: string;
b = 'hello';
// b = 1

/* 声明完变量直接赋值 */
// let c: boolean = true;
/* 如果变量的声明和赋值是同时进行,TS 可以自动对变量进行类型的检测 */
let c = true;

/* JS 中是不考虑函数参数的类型和个数的 */
function sumJS(a, b) {
    return a + b;
}

// console.log(sumJS(123, 456));
console.log(sumJS(123, '456'));

function sumTS(a: number, b: number): number {
    return a + b;
}

let result = sumTS(123, 456);
/* 实参类型 "456" 不可分配给形参类型 number  */
// sumTS(123, '456');
/* 实参数量无效，应为 2 个 */
// sumTS(123, 456, 789);
/* 实参数量无效，应为 2 个 */
// sumTS(123);