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
      const startLength = index;
      const targetLength = targetSubstring.length;

      const start = remainingStr.substring(0, startLength);
      remainingStr = remainingStr.substring(index + targetLength);
        
      result += start + newSubstring;
      
    } 
    return result + remainingStr;

};

module.exports = replace;
