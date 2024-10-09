/**
 * Determines if the given number is prime
 * @param n a positive integer whose primality you want to check
 * @returns true if n is prime and false otherwise
 */
export const isPrime = (n: bigint): boolean => {
  if (n < 1n) {
    throw new Error('n must be positive');
  } else if (n === 1n) {
    return false; 
  } else {
    return isPrimeHelper(n, n - 1n);
  }
};

/**
 * Checks whether n is divisible by any integer from m down to 2
 * @param n a positive integer whose divisibility you want to check
 * @returns true if n is *not* divisible by any integer from m down to 2
 */
const isPrimeHelper = (n: bigint, m: bigint): boolean => {
  if (m < 2n) {
    return true;
  } else if (n % m === 0n) {
    return false;
  } else {
    return isPrimeHelper(n, m - 1n);  
  }
};


/**
 * Returns the number of integers from 1 to n that divide n evenly.
 * @param n a positive number whose number of divisors you want
 * @returns the number of integers from 1 .. n that divide n
 */
export const numDivisors = (n: bigint): bigint => {
  if (n < 1n) {
    throw new Error('n must be positive');
  } else {
    return numDivisorsHelper(n, n);
  }
};

/**
 * Returns the number of integers from 1 to m that divide n evenly.
 * @param n a positive number whose number of divisors you want
 * @returns the number of integers from 1 .. m that divide n
 */
const numDivisorsHelper = (n: bigint, m: bigint): bigint => {
  // TODO: implement this recursively
  if (m === 1n) {
    return n % m === 0n ? 1n : 0n;
  } else {
    return (n % m === 0n ? 1n : 0n) + numDivisorsHelper(n, m - 1n);
  }
};


/** 
/** 
 * Returns the maximnum number of divisors for any integer from 1 to n.
 * @param n a positive number
 * @returns the maximum number of divisors for any integer from 1 to n
 */
export const maxNumDivisors = (n: bigint): bigint => {
  if (n < 1n) {
    throw new Error('n must be positive');
  } else if (n === 1n) {
    return 1n;
  } else {
    const firstDivisor = numDivisors(n);
    const nextDivisor = maxNumDivisors(n - 1n);
    return firstDivisor > nextDivisor ? firstDivisor : nextDivisor;
  }
};



/**
 * Determines if the given integer is highly composite
 * @param n a positive integer whose primality you want to check
 * @returns true if n is highly composite and false otherwise
 */
export const isHighlyComposite = (n: bigint): boolean => {
  if (n < 1n) {
    throw new Error('n must be positive');
  } else if (n == 1n) {
    return true;
  } else {
    return numDivisors(n) > maxNumDivisors(n-1n);
  }
};
