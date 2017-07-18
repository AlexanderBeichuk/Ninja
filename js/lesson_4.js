/**
 * Created by Alex on 03.01.2017.
 */
console.log('lesson_4');
//======================================================================================================================
// sorting
var source = [22, 10, 16, 10, 87, -24, 2, 32, 10, -2, 14, 0, -1],
    target = [],
    minIndex = 0,
    substr = null;

for (var i = 0; i < source.length; i++) {
    if(source[i] < source[minIndex]) {
        minIndex = i;
    }
}

target[0] = source[minIndex];
source[minIndex] = null;

for (i = 0; i < source.length - 1; i++) {
    substr = null;
    for (var j = 0; j < source.length; j++) {      //разница наименьшая
        if (source[j] == null) {
            continue;
        }

        if (substr == null || source[j] - target[0] < substr) {
            substr = source[j] - target[0];
            minIndex = j;
        }
    }

    target[i + 1] = source[minIndex];
    source[minIndex] = null;
}

console.log(target);

//======================================================================================================================
//recours

var user = {
    name: 'alex',
    login: '111',
    password: '222',
    address: {
        city: 'Brest',
        house: {
            flat: 28,
            floor: 25
        }
    }
};

function props(obj) {
    for (var propertyName in obj) {
        if (typeof  obj[propertyName] == 'object') {
            props(obj[propertyName]);
        } else {
            console.log(propertyName + ': ' + obj[propertyName]);
        }
    }
}

props(user);

//======================================================================================================================
//sum alements array - recourse

var array = [22, 10, 16, 10, 87, -24, 2, 32, 10, -2, 14, 0, -1];

function sumArray(arr, i) {
    i = i || 0;

    if (i == arr.length - 1) {
        return arr[i];
    } else {
        return arr[i] + sumArray(arr, i + 1);
    }
}

console.log(sumArray(array));

//======================================================================================================================
// Fibonachchi
var count = 0;

var fib = function (n) {
    count++;
    if (n <= 1) {
        return n;
    } else {
        return fib(n-1) + fib(n-2);
    }
};

console.log(fib(10));

var fibRow = function (x, curVal) {
    curVal = curVal || 1;

    console.log(fib(curVal));

    if (x > curVal) {
        fibRow(x, curVal + 1);
    }
};

count = 0;
fibRow(7);
console.log('count fib coll ' + count);
//======================================================================================================================

var date = new Date();
console.log(date);

count = 0;

var start_fib_date = new Date();
fibRow(35);

console.log('time: ' + (new Date() - start_fib_date));
console.log('count fib coll ' + count);

//======================================================================================================================

var fibCi = function (n) {
    var F = [];
    for (var i = 0; i < n; i++) {
        if (i <= 1) {
            F[i] = 1;
        } else {
            F[i] = F[i-1] + F[i-2];
        }
    }
    return F;
};

start_fib_date = new Date();
console.log(fibCi(35));
console.log('time: ' + (new Date() - start_fib_date));

//======================================================================================================================