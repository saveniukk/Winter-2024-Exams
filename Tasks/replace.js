'use strict';

// Replace substring with newstr

const replace = (originalStr, targetSubstring, newSubstring) => {
  if (targetSubstring === '') {
    return originalStr;
  }
  let remainingStr = originalStr;
  let result = '';

    while (true) {
      const index = remainingStr.indexOf(targetSubstring);
      if (index === -1) {
        return result + remainingStr;
      } else {
        const start = remainingStr.substring(0, index);
        remainingStr = remainingStr.substring(index + targetSubstring.length, remainingStr.length);
        result += start + newSubstring;
      }
    } 

};

module.exports = replace;
