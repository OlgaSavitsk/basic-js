const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  turnsSpeed = turnsSpeed / 3600;
  turns = (2 ** disksNumber) - 1;
  seconds = Math.floor(turns / turnsSpeed);
  return {turns, seconds}
};
