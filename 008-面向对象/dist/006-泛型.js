"use strict";
{
    /* 返回值类型不明确时可以使用泛型 */
    function f(a) {
        return a;
    }
    /* 自动选择泛型 */
    let result1 = f(1);
    /* 手动指定泛型 */
    let result2 = f('hello');
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class TaoistPriest extends Person {
    }
    const taoistpriest = new TaoistPriest('二货道士');
    function f1(a) {
        return a.name;
    }
    let result3 = f1(taoistpriest);
    console.log(result3);
}
