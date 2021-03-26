const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  addition = String(options.addition);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  if(options.addition === undefined) addition = '';
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
return  (((String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition)) + String(separator)).repeat(repeatTimes - 1)) + (String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition));

};
 