import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if((typeof sampleActivity === 'number') ||
  (Array.isArray(sampleActivity))){
    return false;
  }
  if (typeof sampleActivity !== 'number' && +sampleActivity < 15 && +sampleActivity > 0){
  let date = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
  return date;
  }else{
    return false;
  }
}
