'use strict';

// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  for (const attribute_name of   obj1Keys) {
    if (obj1[attribute_name] === obj2[attribute_name]) {
      obj2[attribute_name] = obj1[attribute_name];
      
    } else {
      delete obj1[attribute_name];
    }
  }
  return obj1;
};

module.exports = intersection;
