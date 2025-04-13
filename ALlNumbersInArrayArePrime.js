function checkPrime(num) {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
function checkAllPrimes(arr) {
  return arr.every((x) => checkPrime(x));
}

console.log(checkAllPrimes([2, 3, 5, 7, 11]));
