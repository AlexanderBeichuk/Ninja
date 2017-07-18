/**
 * Created by Alex on 05.01.2017.
 */
console.log('lesson_6');
//======================================================================================================================

function  Cart() {      //корзина
    var products = [];

    this.getProduct = function (index) {
        return products[index];
    };

    this.addProduct = function (product, count) {
        if (!validateProduct(product)) {
            //throw new Error('Throw error: Wrong product!');
            console.error('Wrong product');
        }

        var item = getProductByName(product.name);
        if (item) {
            item.count += count;
            //local storage
            var lsCount = +localStorage.getItem('productCount : ' + product.name);
            localStorage.setItem('productCount : ' + product.name , lsCount + count);
        } else {
            products.push({obj: product, count: 1});
            //local storage
            localStorage.setItem('productCount : ' + product.name , count);
            localStorage.setItem('product : ' + product.name ,JSON.stringify(product));
        }
    };

    this.getProductDiscount = function (productName) {
        if (productName) {
            var item = getProductByName(productName);
            return getDiscount(item);
        } else {
            var fullDiscount = 0;
            for (var i = 0; i < products.length; i++) {
                fullDiscount += getDiscount(products[i]);
            }
            return fullDiscount;
        }
    };

    this.getProductPrice = function (productName) {
        var item = getProductByName(productName);
        var discount = getDiscount(item) / item.count;

        return item.obj.price - discount;
    };

    this.getProductSum = function (productName) {
        if (productName) {
            var item = getProductByName(productName);
            return this.getProductPrice(productName) * item.count;
        } else {
            var fullSum = 0;

            for (var i = 0; i < products.length; i++) {
                fullSum += this.getProductPrice(products[i].obj.name) * products[i].count;
            }
        }
    };

    function getDiscount(item) {
        var count = item.count;
        if (count > 5) {
            return item.obj.price * 10 / 100 * count;
        } else if (count > 3) {
            return item.obj.price * 5 / 100 * count;
        } else {
            return 0;
        }
    }

    function  getProductByName(productName) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].obj.name == productName) {
                return products[i];
            }
        }
    }

    function validateProduct(product) {
        return product.name != undefined && product.price != undefined;
    }

    this.outputCart = function () {
        console.log(products);
    };
}

function Product() {
    this.name = null;
    this.price = null;
    //JSON
    this.jsonFunction = function () {
        console.log('JSON test is Success!');
    }
}

Product.createEmpty = function () {
    var product = new Product();
    product.price = 0;
    product.name = 'empty';
    return product;
};

Product.createFromData = function (date) {
    var product = new Product();
    product.price = date.price;
    product.name = date.name;
    return product;
};

function outputKeyValue(key, value) {
    console.log(key + ' = ' + value);
};

var cart = new Cart();

cart.addProduct(Product.createEmpty(), 1);
cart.addProduct(Product.createFromData({name: 'Milk', price: '50'}), 5);
cart.addProduct(Product.createFromData({name: 'tv', price: '800'}), 4);
cart.addProduct(Product.createFromData({name: 'phone', price: '300'}), 2);
//throw new Error()
//cart.addProduct({name: 'phone'});


cart.outputCart();

outputKeyValue('Milk discount', cart.getProductDiscount('Milk'));
outputKeyValue('TV discount', cart.getProductDiscount('tv'));
outputKeyValue('Phone discount', cart.getProductDiscount('phone'));

outputKeyValue('Phone price', cart.getProductPrice('phone'));
outputKeyValue('Milk price', cart.getProductPrice('Milk'));
outputKeyValue('TV price', cart.getProductPrice('tv'));

outputKeyValue('TV sum price', cart.getProductSum('tv'));

//======================================================================================================================
//JSON

Product.createEmpty();

console.log(JSON.stringify(Product.createEmpty()));


var array = [], arr = [], string = 'string', number = 9, boolean = true;
for (var i = 0; i < 5; i++) {
    arr.push(Product.createFromData({name: 'Milk_'+(i+1).toString(), price: '50'}));
    array.push(Product.createFromData({name: 'Milk_'+(i+1).toString(), price: '50'}));

}
arr.push(string);
arr.push(number);
arr.push(boolean);

console.log(JSON.stringify(arr));

var jsonString = JSON.stringify(array);
var parsed = JSON.parse(jsonString);
console.log(parsed);

//parsed[0].jsonFunction();

for (i = 0; i < parsed.length; i++) {
    parsed[i] = Product.createFromData(parsed[i]);
}

parsed[0].jsonFunction();

//======================================================================================================================
//Local Storage
//======================================================================================================================
//SetTimeout

setTimeout(Product.createEmpty(), 1000);


//======================================================================================================================