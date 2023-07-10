const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
let sum = 0;

let i = 0;

const getAverageValue = (arr) => {

    for (let i = 0; i < arr.length; i += 1) {

    sum = sum + arr[i];
    }

    let average = Math.floor(sum / arr.length); 
    console.log('average: ', average);

}

console.log('getAverageValue(allСashbox): ', getAverageValue(allСashbox));
