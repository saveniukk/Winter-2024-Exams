"use strict";

// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return "";

  const substringBeginning = prefixIndex + prefix.length;
  str = str.substring(substringBeginning);

  const suffixIndex = str.indexOf(suffix);
  if (suffixIndex === -1) return "";

  str = str.substring(0, suffixIndex);

  return str;
};

module.exports = getValueBetween;
