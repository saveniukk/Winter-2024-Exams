'use strict';

// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
  const sourceKeys = Object.keys(obj1);
  const commonKeys = sourceKeys.filter(key => Object.prototype.hasOwnProperty.call(obj2, key));
  const result = {};
  for (const key of commonKeys) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
};

module.exports = intersection;

