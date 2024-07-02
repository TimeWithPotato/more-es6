//Array of object
const users = [
    { id: 1, name: 'Abul', job: 'doctor' },
    { id: 2, name: 'babul', job: 'doctor' }
];
console.log(users[0].name);

//Nested Object
const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' },
        { id: 3, name: 'kabul', job: 'leader' }
    ]
}
console.log(data.data[0].job);

const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '35/A,kohukhet',
            second: '3rd floor'
        },
        postOffice : 'Cantonment',
        sid: 'high side',
        city:'Dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor);

/* const userFloor2 = user.address.stret.second;
 console.log(userFloor2); TypeError: Cannot read properties of undefined (reading 'second')
 */

const userFloor2 = user?.address?.stret?.second;
console.log(userFloor2);