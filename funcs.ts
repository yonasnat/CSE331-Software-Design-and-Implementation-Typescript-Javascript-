
// Problem 3:

// TODO: add the definition of "r" here
/**
 * This function calculates the result based on the values of `n` and `m`.
 * @param {bigint} n - The first value.
 * @param {bigint} m - The second value.
 * @returns {bigint} The calculated result.
 */

export const r = (t: {n: bigint, m: bigint}): bigint => {
  const r : {n: bigint, m: bigint} = t;
  if (t.n > 0n && t.m > 0n) {
      return 0n;
  } else if (t.n > 0n && t.m === 0n) {
      return -1n;
  } else {
      return 1n;
  } 
};
  
// TODO: add the definition of "s" here
type TupleWithBoolean = readonly [bigint, boolean];
type BooleanInput = boolean;
type InputType = TupleWithBoolean | BooleanInput;
/**
 * This function calculates the result based on the value input.
 * @param {InputType} input - The value.
 * @returns {bigint} The calculated result.
 */
export const s = (input: InputType): bigint => {
    if (typeof input === 'boolean') {
        return 0n;
    } else {
        const [n, bool] = input;
        if (bool === true) {
            return n;
        } else {
            return s([n + 1n, true]);
        }
    }
};

// TODO: add the definition of "t" here
type RecordWithReals = { readonly n: number, readonly m: number };
type TupleWithRecord = readonly [boolean, RecordWithReals];
/** This function calculates the result based on the value input.
 * @param {TupleWithRecord} input - The value.
 * @returns {number} The calculated result.
 * const [bool, { n, m }] = input;
    if (bool === true) {
        return n * m;
    } else {
        return n - 2 * m;
    }
 */
export const t = (input: TupleWithRecord): number => {
    if (input[0] === true) {
        return input[1].n * input[1].m;
    } else {
        return input[1].n - 2 * input[1].m;
    }
};
export const h = (m: bigint): bigint => {
    if (m <= -1n){
        return -m + 2n;
}
    if (m >= 1n){
        return m + 2n;
    }
};

/** This function calculates the result based on the value 'n'.
 * @param {bigint} n - The value.
 * @returns {bigint} The calculated result.
 */
// Problem 6:
// TODO: translate your mathematical definition for "fact" to code
export const fact = (n: bigint): bigint => {
    if (n === 0n) {
        return 1n;
    } else {
        return n * fact(n - 1n);
    }
}