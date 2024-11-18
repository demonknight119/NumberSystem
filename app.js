function findPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    for (let j = 2; j * j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(numbers[i] + " is a prime number");
    } else {
      console.log(numbers[i] + " is not a prime number");
    }
  }
}
