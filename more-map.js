const numbers = [12, 56, 88, 44];
const half = numbers.map(x => x / 2);
console.log(half);

const third = numbers.map(x => x / 3);
console.log(third);

const friends = ['Thomas Hanks', 'Tom Cruise', 'Tom Sulaiman'];
// console.log(friends[0]);
const frinedLetters = friends.map(fr => fr[0]);
console.log(frinedLetters);

const nameLength = friends.map(fr => fr.length);
console.log(nameLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'iphone', price: 80000 }
]

const items = products.map(product => product.name);
console.log(items);
