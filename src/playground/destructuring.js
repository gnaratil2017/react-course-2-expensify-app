//Object destructuring

// const person = {
//     //name: 'Greg',
//     age: 20,
//     location: {
//         city: 'New York',
//         temp: 80
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city &&  temperature) {
//     console.log(`it's ${person.location.temp} in ${person.location.city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'self-published' } = book.publisher

// console.log(publisherName)

// Array destrucutring

const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147'];

const [, , state = 'New York'] = address;

console.log(`Youre are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, small, medium, large] = item;


console.log(`A medium ${drink} costs ${medium}`)