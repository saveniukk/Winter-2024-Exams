'use strict';

// Replace substring with newstr

const replace = (originalStr, targetSubstring, newSubstring) => {
  if (targetSubstring === '' || !originalStr.includes(targetSubstring)) {
    return originalStr;
  }
  let remainingStr = originalStr;
  let result = '';

    while (remainingStr.includes(targetSubstring)) {
      const index = remainingStr.indexOf(targetSubstring);
      
        const start = remainingStr.substring(0, index);
        remainingStr = remainingStr.substring(index + targetSubstring.length, remainingStr.length);
        result += start + newSubstring;
      
    } 
    return result + remainingStr;

};

module.exports = replace;
