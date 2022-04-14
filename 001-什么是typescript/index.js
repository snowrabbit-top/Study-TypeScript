var number1 = 0;
var number2 = 0;
var value = document.getElementById('value');
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
    value.innerHTML = "<span>".concat(number1 + number2, "</span>");
}
