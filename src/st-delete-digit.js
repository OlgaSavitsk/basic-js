import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr1 = String(n).split('');
  let pos = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] <= arr1[pos]) {
      pos = i;
    }
  }
  arr1.splice(pos, 1);
  return +arr1.join('');
}
