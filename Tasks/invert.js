'use strict';

// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i-- ){
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

module.exports = invert;
