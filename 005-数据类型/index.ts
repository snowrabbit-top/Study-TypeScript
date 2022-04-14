let a: number;
a = 10;

let b: unknown;
b = 'hello';

let c: any;
c = 'hello';

let d: string;
d = '10';

a = c;
/* 分配的表达式类型 unknown 不可分配给类型 number  */
// a = b;
// d = b;
