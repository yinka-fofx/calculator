var exp = '', number, decimal, equal, operator, allowSR, turnOn= true;
var textview = document.forms['ourForm']['textview'];

function insertNum(num) {
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    } else {
        exp = textview.value + num;
        textview.value = exp;
        number = true
    }
    if (operator) decimal = false;
    //SR('a')
}

function insertDec() {
    if (number && !decimal) {
        textview.value= exp + '.';
        decimal = true;
        operator = false;
    }
}

function equalTo() {
    if (exp) {
        exp = eval (exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
    }
}

function clean() {
    exp = '';
    textview.value = exp;
    decimal = false;
}

function back() {
    exp = textview.value;
    exp = exp.substring (0, exp.length - 1);
    textview.value = exp;
}

// function turnOn {
//     exp = '0';
//     textview.value = exp;
//     exp = exp.substring (0)
//     number = false;
    
// }

