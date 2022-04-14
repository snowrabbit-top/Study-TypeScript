{
    /* 类属性的存取器 */
    class Person {
        private _name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }
        get age(): number {
            return this._age;
        }
        set age(value: number) {
            this._age = value;
        }
    }

    const person = new Person('小叽', 16);
    console.log(person.name);
}