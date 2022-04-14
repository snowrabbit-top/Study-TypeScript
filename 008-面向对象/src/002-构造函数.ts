/* 构造函数 */
class Person {
    name: string;
    age: number;
    /* 构造函数: 类在创建的时候调用 */
    constructor(name: string, age: number) {
        console.log('执行构造函数了');
        /* this 就是当前实例 */
        console.log(this);
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('大家好');
    }
    get Name() {
        return this.name;
    }
    get Age() {
        return this.age;
    }
    set Name(value: string) {
        this.name = value;
    }
    set Age(value: number) {
        this.age = value;
    }
}

const Chobits = new Person('Chobits', 16);
console.log(Chobits);
const SnowRabbit = new Person('SnowRabbit', 18);
console.log(SnowRabbit);