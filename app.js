const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];

let primeArray = new Array();
function findPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeArray.push(numbers[i]);
    }
  }
}

findPrime(numbers);
console.log(primeArray);

function maxMinSum(primeArray) {
  let max = Math.max(...primeArray);
  let min = Math.min(...primeArray);
  let sum = primeArray.reduce((a, b) => a + b, 0);
  console.log(max);
  console.log(min);
  console.log(sum);
}
maxMinSum(primeArray);
