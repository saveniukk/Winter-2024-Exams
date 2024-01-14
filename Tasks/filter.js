'use strict';

// Filter array by type name

const filterArrayByType = (array, type) => {
  let filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === type) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
};

module.exports = filterArrayByType;
