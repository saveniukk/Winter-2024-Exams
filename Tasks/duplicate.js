'use strict';

// Return an array without duplicates

const duplicate = (value, amount) => {
  if (amount <= 0) return [];
  else {
    const res = [];
    for (let i = 0; i < amount; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;

