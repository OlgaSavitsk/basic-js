const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
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
};



