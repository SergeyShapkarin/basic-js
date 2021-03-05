const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, TurnSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns/TurnSpeed*3600)

  return {turns: turns, seconds: seconds}
};
