const numbers = [1, 2, 3, 4, 5];
//.reduce (accumulatorFunction, initial value)
//accumulatorFunction use two parameters

const total = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(total);

const total2 = numbers.reduce((prev, curr) => {
    console.log(prev, ' ', curr);
    return prev + curr;
}, 0);
console.log('\n', total2);

