const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = '';
  if (Array.isArray(members)) {
    members.forEach((item) => {
      typeof(item) === 'string' ? (nameTeam = nameTeam + item.replace(/\s+/g, ' ').trim()[0]) : ''
    })
    return nameTeam.toUpperCase().split('').sort().join('')
  } else {return false}
};
