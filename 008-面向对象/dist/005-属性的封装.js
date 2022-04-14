"use strict";
{
    /* 类属性的存取器 */
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    }
    const person = new Person('小叽', 16);
    console.log(person.name);
}
