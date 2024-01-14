'use strict';

// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const commonKeys = obj1Keys.filter(key => obj2.hasOwnProperty(key));
  const result = {};
  for (const attributeName of obj1Keys) {
    if (obj1[attributeName] === obj2[attributeName]) {
      obj2[attributeName] = obj1[attributeName];
      
    } else {
      delete obj1[attributeName];
    }
  }
  return obj1;
};

module.exports = intersection;
