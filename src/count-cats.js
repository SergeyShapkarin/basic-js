const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  backyard.forEach(function(item) {
    cats += item.filter(item => item == "^^").length;
  } );
  return cats;
};
