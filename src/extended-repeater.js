import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  addition = String(options.addition);
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes;
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes;
  if(options.addition === undefined) addition = '';
return  (((String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition)) + String(separator)).repeat(repeatTimes - 1)) + (String(str) + ((addition + String(additionSeparator)).repeat(String(additionRepeatTimes - 1)) + addition));
}
