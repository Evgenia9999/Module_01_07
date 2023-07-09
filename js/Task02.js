const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
let sum = 0;

const getAverageValue = () => {

for (let i = 0; i < allСashbox.length; i += 1)

sum = sum + allСashbox[i];

}
getAverageValue();

const average = Math.floor(sum / 8);
console.log('average: ', average);
