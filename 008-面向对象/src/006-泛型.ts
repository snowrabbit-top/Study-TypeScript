{
    /* 返回值类型不明确时可以使用泛型 */
    function f<T>(a: T): T {
        return a;
    }
    /* 自动选择泛型 */
    let result1 = f(1);
    /* 手动指定泛型 */
    let result2 = f<string>('hello');

    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class TaoistPriest extends Person {
    }

    const taoistpriest = new TaoistPriest('二货道士');
    function f1<T extends Person>(a: T): string {
        return a.name;
    }
    let result3 = f1(taoistpriest);
    console.log(result3);
}