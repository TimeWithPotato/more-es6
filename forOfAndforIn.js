let text = [
    "GeeksforGeeks",
    " A Computer Science Portal for Geeks ",
    "43"
];
let userId = "";
for (let i of text) {
    userId += i;
    console.log(userId);
}
console.log('\n');
let userId2 = "";
for (let i in text) {
    // userId2 += i;
    userId2 += text[i];
    console.log(userId2);
}