
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = () => {

let result = names.map(name => 'Mr ' + name);
console.log('result: ', result);
}

addPrefix();