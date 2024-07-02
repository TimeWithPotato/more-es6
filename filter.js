const numbers = [12, 5, 23, 45, 11, 78, 9, 55, 61, 1];
const bigNums = numbers.filter(num => num > 20);
console.log(bigNums);

const tiny = numbers.filter(num => num < 10);
console.log(tiny);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'iphone', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];

const expensive = products.filter(product => product.price > 40000);
console.log(expensive);
