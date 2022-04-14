let number1: number = 0;
let number2: number = 0;
let value: HTMLElement = document.getElementById('value') as HTMLElement;

function setNumber(element, type) {
    switch (type) {
        case 'number1':
            /* 在 JavaScript 中不限制数据类型容易造成失误,字符串 → 整型 */
            number1 = element.value;
            break;
        case 'number2':
            number2 = element.value;
            break;
    }
}

function add() {
    value.innerHTML = `<span>${number1 + number2}</span>`;
}

let element = document.createElement('h3');
element.id = 'value';
setNumber(element, 'number1');
add();