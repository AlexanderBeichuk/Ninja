/**
 * Created by Alex on 04.01.2017.
 */
console.log('lesson_5');
//======================================================================================================================

var Product = {
    price: 100,
    count: 20,
    size: [10, 20, 30],

    getPrice: function () {
        console.log(this.price);
    }
};

Product.getPrice();

var testProduct = Product;

Product = null;

testProduct.getPrice();

//======================================================================================================================

function ProductClass(name, price) {
    //this = {}
    ProductClass.count++;                       //static

    function  calcDiscount() {
        return price * 0.1;
    }
    this.name = name;
    this.price = price;

    this.getDiscount = function () {
        return 'Discount = ' + calcDiscount();
    };

    //return this
}

ProductClass.count = 0;                         //static

ProductClass.getCount = function () {           //static
    return 'count = ' + ProductClass.count;
};

var tv = new ProductClass('tv', 100);
var phone = new ProductClass('phone', 10);
var car = new ProductClass('car', 100000);

console.log(tv);
console.log(tv.getDiscount());
console.log(car);
console.log(car.getDiscount());
console.log(phone);
console.log(phone.getDiscount());

console.log(ProductClass.getCount());

//======================================================================================================================

//function Product2(data) {
//    if (data == undefined) {
//    //   this.price = 100;
//    //} else {
//    //    if (data == undefined) {
//    //        this.price = data.price;
//    //    }
//    // }
//}
function  Product2() {
    this.price = null;
    this.name = null;
}

Product2.createEmpty = function () {
    var product = new Product2();
    product.price = 100;
    product.name = 'empty';
    return product;
};

Product2.createFromData= function (data) {
    var product = new Product2();
    product.price = data.price;
    product.name = data.name;
    return product;
};

var book = Product2.createEmpty();
var apple = Product2.createFromData({price: 20, name: 'green'});
console.log(book);
console.log(apple);

//======================================================================================================================