const numbers = [12, 5, 23, 45, 11, 78, 9, 55, 61, 1];
const five = numbers.find(num => num % 5 === 0);
console.log(five);

const fiveAll = numbers.filter(num => num % 5 === 0);
console.log(fiveAll);