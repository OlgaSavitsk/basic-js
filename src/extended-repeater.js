const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  addition = String(options.addition);
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes;
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes;
  if(options.addition === undefined) addition = '';
return  (((String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition)) + String(separator)).repeat(repeatTimes - 1)) + (String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition));

};
 