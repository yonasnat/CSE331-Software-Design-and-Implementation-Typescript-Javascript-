/**
 * Returns the n-th Fibonacci number
 * @param n a non-negative integer, indicating which Fibonacci number to return
 * @returns 0 if n = 0, 1 if n = 1, and the sum of the previous two Fibonacci
 *    numbers otherwise
 */
export const fib = (n: bigint): bigint => {
  if (n < 0n) {
    throw new Error('n must be non-negative');
  } else if (n === 0n) {
    return 0n;
  } else if (n === 1n) {
    return 1n;
  } else {
    const end = fastFib(n);
    return end.curFib;
  }
};


/** Type that stores not just one Fibonacci number but the previous one also. */
export type FibPair = {curFib: bigint, prevFib: bigint};

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns a FibPair containing fib(n) (and also fib(n-1))
 */
export const fastFib = (n: bigint): FibPair => {
  // TODO: implement this in problem 1
  if (n < 1n) {
    throw new Error('n must be greater than 1');
  } else if (n === 1n) {
    return { curFib: 1n, prevFib: 0n };
  } else {
    const end = fastFib(n - 1n);
    return { curFib: end.curFib + end.prevFib, prevFib: end.curFib };
  }
};


/** Type for storing (fib(n-1), fib(n)) for some n. */
export type FibPair2 = [bigint, bigint];

/**
 * Returns the n-th Fibonacci number
 * @param n a positive integer, indicating which Fibonacci number to return
 * @returns the pair containing fib(n)
 */
export const fastFib2 = (n: bigint): FibPair2 => {
  // TODO: implement this in problem 3
    if (n === 0n || n === 1n) {
      return [0n, 1n];
    } else {
      const [prevFib, curFib] = fastFib2(n - 1n);
      return [curFib, prevFib + curFib];
    }
};


/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param m a non-negative integer
 * @returns the smallest Fibonacci number greater than or equal to m
 */
export const nextFib = (m: bigint): bigint => {
  if (m < 0n) {
    throw new Error('m must be non-negative');
  } else if (m === 0n) {
    return 0n;
  } else {
    return nextFibHelper(0n, 1n, m);
  }
};

/**
 * Returns the smallest Fibonacci number that is greater than or equal to m.
 * @param prevFib the Fibonacci number before curFib
 * @param curFib the current Fibonacci number (working up to m)
 * @param m the lower bound on the Fibonacci number
 * @returns the smallest Fibonacci number greater than or equal to m
 */
const nextFibHelper = (prevFib: bigint, curFib: bigint, m: bigint): bigint => {
  // TODO: implement this in problem 4
  if (curFib >= m) {
    return curFib;
  } else {
    return nextFibHelper(curFib, prevFib + curFib, m);
  }
};