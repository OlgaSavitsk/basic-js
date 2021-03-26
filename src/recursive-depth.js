const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
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
};