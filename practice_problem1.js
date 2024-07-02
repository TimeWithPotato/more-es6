//1.
const oddArray = [1, 3, 5, 7, 9];
const evenArray = [];
for (let x of oddArray) {
    x += 1;
    evenArray.push(x);
}
console.log(evenArray);

const evenArray2 = oddArray.map(x => x + 1);
console.log(evenArray2);