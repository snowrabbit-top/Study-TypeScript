let number1 = 0;
let number2 = 0;
let value = document.getElementById('value');

function setNumber(element, type) {
    switch (type) {
        case 'number1':
            /* 在 JavaScript 中不限制数据类型容易造成失误,字符串 → 整型 */
            number1 = parseInt(element.value);
            break;
        case 'number2':
            number2 = parseInt(element.value);
            break;
    }

}

function add() {
    value.innerHTML = `<span>${number1 + number2}</span>`;
}