import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
      let depth = 0;
      let max = 1;
          for (let elem of arr) {
            if(Array.isArray(elem)){
              depth = 1 + this.calculateDepth(elem);
              if(depth > max){
                max = depth;
              }
            }
          }
      return max;
  }
}
