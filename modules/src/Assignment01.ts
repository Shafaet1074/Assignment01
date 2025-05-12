function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo() {
    return `"Make:${this.make} , Year:${this.year}"`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `"Model:${this.model}"`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return parseInt(value.length.toString());
  } else {
    return value * 2;
  }
}
processValue("hellojhg"); // Output: 5
processValue(10); // Output: 20

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
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
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

getDayType(Day.Thursday);
getDayType(Day.Friday);
