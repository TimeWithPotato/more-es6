// forEach is similar to map however forEach does not return anything
const friends = ['Thomas Hanks', 'Tom Cruise', 'Tom Sulaiman'];
friends.forEach(f => console.log(f));

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'iphone', price: 80000 }
]

products.forEach(product => console.log(product.name));