'use strict';

// Replace substring with newstr

const replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  }
  src = str;
  res = '';
  
    do {
      const _index = src.indexOf(substr);
      if (_index === -1) {
        return res + src;
      } else {
        const start = src.substring(0, _index);
        src = src.substring(_index + substr.length, src.length);
        res += start + newstr;
      }
    } while (true);

};

module.exports = Replace;
