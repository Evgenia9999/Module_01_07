const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {

    sum = sum + arr[i];
    }

    let average = Math.floor(sum / arr.length); 
    return average;

}

console.log('getAverageValue(allCashbox): ', getAverageValue(allCashbox));
