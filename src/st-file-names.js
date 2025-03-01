import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const arr = Object.values(names);
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (newArr[i] === newArr[j]) {
        count += 1;
      } else if (newArr[i] === arr[j]) {
        count += 1;
      }
      if (count > 0) {
        newArr[i] = `${arr[i]}(${count})`;
      }
    }
  }
  return newArr;
}
