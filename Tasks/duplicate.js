'use strict';

// Return an array without duplicates

const duplicate = (value, amount) => {
  if (amount <= 0) return [];

  return Array.from({ length: amount }, () => value);
};

module.exports = duplicate;

