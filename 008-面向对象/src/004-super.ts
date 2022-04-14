{
    class Species {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log(this.name + ' 说话了');
        }
    }

    class Chobits extends Species {
        createTime: Date;
        constructor(name: string, age: number, createTime: Date) {
            super(name, age);
            this.createTime = createTime;
        }
        invade() {
            console.log(this.name + ' 在入侵网络');
        }
        speak() {
            /* super 代表父类 */
            super.speak();
        }
    }

    const chobits = new Chobits('小叽', 16, new Date('2000-04-13'));
    console.log(chobits);
    console.log(chobits.createTime.toLocaleString());
}