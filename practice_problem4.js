const arr = [1, 9, 7, 22];
const total = arr.reduce((prev, curr) => prev + curr, 0);
console.log(total);

//let total2; NaN
let total2 = 0;
for (let x of arr) {
    total2 += x;
}
console.log(total2);

//2.
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
]

const sumOfAge = people.reduce((prev, curr) => {
    return prev + curr.age;
}, 0);
console.log(sumOfAge);
