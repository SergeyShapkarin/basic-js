const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let discard = 0
  let response = []
  if (arr.length == 0) {
      return arr } else {
          if (Array.isArray(arr)) {
              arr.forEach((item, index) => {
                  if (item === '--discard-prev') {
                      if (index != 0) {
                          response.splice(index-1, 1)
                          discard =0
                      }
                  } else if (item === '--double-prev') {
                      if (index != 0) {
                          if (discard === 2) {
                              discard = 0
                          } else {
                              response.push(response[index-1])
                          }
                      }
                  } else if (item === '--double-next') {
                      if (index != arr.length-1) {
                          response.push(arr[index+1])
                      }
                  } else if (item === '--discard-next') {
                      if (index != arr.length-1) {
                          discard = 1
                      }
                  } else {
                      if (discard === 0) {
                          response.push(item)
                      } else { discard = 2 }
                  }
              })
          } else {
            throw new Error('NA')
          }
      }
return response
};
