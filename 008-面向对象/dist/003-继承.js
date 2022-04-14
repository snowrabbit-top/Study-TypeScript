"use strict";
{
    class Species {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log(this.name + ' 说话了');
        }
    }
    class Chobits extends Species {
        invade() {
            console.log(this.name + ' 在入侵网络');
        }
    }
    const chobits = new Chobits('小叽', 16);
    chobits.speak();
    chobits.invade();
    class Judge extends Species {
        magic() {
            console.log(this.name + ' 在施展魔法');
        }
    }
    const judge = new Judge('雪兔', 18);
    judge.speak();
    judge.magic();
}
