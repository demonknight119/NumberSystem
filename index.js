function EvenandOdd(numbers) {
  let even = numbers.filter((num) => num % 2 === 0);
  let odd = numbers.filter((num) => num % 2 !== 0);
  console.log(even);
  console.log(odd);
}
