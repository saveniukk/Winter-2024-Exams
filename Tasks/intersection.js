'use strict';

// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const result = [];
  for (const attributeName of obj1Keys) {
    if (obj1[attributeName] === obj2[attributeName]) {
      result.push(attributeName);
      
    } else {
      delete obj1[attributeName];
    }
  }
  return result;
};

module.exports = intersection;
