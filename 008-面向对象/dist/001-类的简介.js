"use strict";
/* 使用 class 关键字来定义一个类 */
/**
 * 对象主要包含两个部分
 * 属性
 * 方法
 */
class Person {
    constructor() {
        /* 直接定义的是实例属性,需要通过 new 的实例访问 */
        /* readonly 只读属性 */
        this.name = 'Chobits';
        this.age = 18;
    }
    /* 定义方法 可加 static 同属性 */
    sayHello() {
        console.log('hello 大家好');
    }
}
/* 字段前加上 static 可以定义类的静态属性,只能通过类来访问 */
Person.school = '起缘';
const person = new Person();
// console.log(person);
// person.age = 16;
// console.log(person);
// console.log(Person);
// console.log(Person.school);
person.sayHello();
