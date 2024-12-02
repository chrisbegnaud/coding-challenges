// ******** Count the divisors of a number  ********

/* Count the number of divisors of a positive integer n.
Random tests go up to n = 500000, but fixed tests go higher.*/

function getDivisorsCnt(n){
  let count = 0;
  const sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++) {
      if (n % i === 0) {
        count += 2;
      }
    }
  if (sqrt === Math.floor(sqrt)){
    count -= 1;
  }
  return count;
}