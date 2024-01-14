'use strict';

// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  const suffixIndex = str.indexOf(suffix);

  if (prefixIndex === -1 || suffixIndex === -1) return "";

  const substringBeginning = prefixIndex + prefix.length;
  const result = str.substring(substringBeginning, suffixIndex);

  return result;
};

module.exports = getValueBetween;
 