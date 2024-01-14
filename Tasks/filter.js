"use strict";

// Filter array by type name

const filterArrayByType = (array, type) => {
  let indicesToRemove = [];
  for (const element of array) {
    const indexOfElement = array.indexOf(element);
    if (typeof array[indexOfElement] !== type) {
      indicesToRemove.unshift(indexOfElement);
    }
  }
  for (const indexToRemove of indicesToRemove) array.splice(indexToRemove, 1);
  return array;
};

module.exports = filterArrayByType;
 