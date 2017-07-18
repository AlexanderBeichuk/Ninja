/**
 * Created by Alex on 03.01.2017.
 */
console.log('lesson_3');
//=============================================begin_1==================================================================
var user = {
    name: 'alex',
    login: '111',
    password: '222'
};

var str = '';
for(var property in user){
    str += property + ': ' + user[property] + '\n';
}

console.log(str);

//===================================================end_1==============================================================
//==============================================begin_2=================================================================
function testFunc() {
    console.log('Hi');
}

var a = 2;

function testFunc2(message) {
    var a = 'a';
    console.log(message);
}

testFunc();
testFunc2('Alex');
testFunc2(a);

//===============================================

function testFunc3(message, i) {
    message = message || 'Значение по умолчанию';
    console.log(message);
}

testFunc3();
testFunc3('test');

//================================================

function testFunc4(message, show) {
    message = message || 'Значение по умолчанию';
    if (show == undefined){
        show = true;
    }

    if (show) {
        console.log(message);
    }
}

testFunc4('Show', false);

//=================================================

function sum(a, b) {
    if (a == 0){
        return;
    }
    return a + b;
}

var res = sum(0, 5);

if(res == undefined){
    console.log('ne vichesleno!!!');
} else {
    console.log(res);
}

//=====================================================

var res_func = sum;
console.log(res_func(3, 5));

var sum2 = function (a, b) {
    return a + b;
};

console.log(sum2(1, 4));

//========================================================

var str = 2;

if (typeof str == 'string'){
    var echo = function () {
        console.log('it is string');
    }
} else {
    var echo = function () {
        console.log('it is not string');
    }
}

echo();

//==========================================================

function multiply(a, b) {
    return a * b;
}

function multiply(a, b, c) {
    //its c = c || return a * b;
    if (c == undefined){
        return a * b;
    }
    return a * b * c;
}

console.log(multiply(2, 3));

//===============================================================

function power(num, i) {
    if (i == 1){
        return num;
    } else {
        return num * power(num, i - 1);
    }
}

console.log(power(2, 3));

//==============================================end_2===================================================================