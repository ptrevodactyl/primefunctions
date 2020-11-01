function primeGen(num) {
  const boolPrimes = [];
  for (let i = 2; i < num; i++) {
    boolPrimes[i] = true;
  }
  for (let i = 2; i * i <= num; i++) {
    if (boolPrimes[i]) {
      for (let j = i * i; j <= num; j += i) {
        boolPrimes[j] = false;
      }
    }
  }
  const primes = [];
  for (let i = 0; i < boolPrimes.length; i++) {
    if (boolPrimes[i]) primes.push(i);
  }
  return primes;
}

console.log(primeGen(100));
