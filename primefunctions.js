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

function cumulativeSum(nums) {
  const sum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sum.push(sum[i - 1] + nums[i]);
  }
  return sum;
}

console.log(cumulativeSum(primeGen(100)));

function maxPrimeSum(num) {
  const primeList = primeGen(num);
  const primeSum = cumulativeSum(primeList);
  let longestSum = 0;
  let longestPrime = 2;
  for (let i = 0; i < primeSum.length; i++) {
    if (primeList.includes(primeSum[i]) && i + 1 > longestSum) {
      longestSum = i + 1;
      longestPrime = primeSum[i];
    } else {
      for (let j = i; j >= 0; j--) {
        if (primeList.includes(primeSum[i] - primeSum[j]) && i - j > longestSum) {
          longestSum = i - j;
          longestPrime = primeSum[i] - primeSum[j];
        }
      }
    }
  }
  return [longestPrime, longestSum];
}

console.log(maxPrimeSum(100));
