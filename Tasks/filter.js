"use strict";

// Filter array by type name

const filterArrayByType = (array, type) => {
  let remove = [];
  for (const element of array) {
    const indexOfElement = array.indexOf(element);
    if (typeof array[indexOfElement] !== typeToRemove) {
      remove.unshift(indexOfElement);
    }
  }
  for (const indexOfElement of remove) array.splice(indexOfElement, 1);
  return array;
};

module.exports = filterArrayByType;
 