"use strict";
function formatString(input, toUpper) {
    if (toUpper) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
function filterByRating(items) {
    return items.filter((item) => {
        item.rating > 4;
    });
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
filterByRating(books);
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `"Make:${this.make} , Year:${this.year}"`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `"Model:${this.model}"`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
function processValue(value) {
    if (typeof value === "string") {
        return parseInt(value.length.toString());
    }
    else {
        return value * 2;
    }
}
processValue("hellojhg"); // Output: 5
processValue(10); // Output: 20
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
getDayType(Day.Thursday);
getDayType(Day.Friday);
