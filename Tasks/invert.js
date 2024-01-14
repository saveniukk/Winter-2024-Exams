'use strict';

// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const reversedArray = Object.keys(array);
  T.forEach((_, i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
