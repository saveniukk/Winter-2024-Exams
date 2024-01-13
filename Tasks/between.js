"use strict";

// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (i === -1) return '';
  else {
    const substringBeginning = prefixIndex + prefix.length;
    str = str.substring(substringBeginning);
    if (suffix) {
      suffixIndex = str.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, suffixIndex);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
