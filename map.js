const numbers = [2, 8, 4, 6, 3];
const output = [];

for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);

function getDoubles(numbers) {
    const output2 = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output2.push(doubled);
    }

    return output2;
}
const result = getDoubles(numbers);
console.log(result);

function getDoubles2(numbers) {
    const output3 = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output3.push(doubled);
    }

    return output3;
}
function doubleItOld(number) {
    return number * 2;
}
const result2 = getDoubles2(numbers);
console.log(result2);

const doubleIt = num => num * 2;
/*
Purpoe of map
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the array
*/

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const fiveTimes = numbers.map(num => num * 5);
console.log(fiveTimes);