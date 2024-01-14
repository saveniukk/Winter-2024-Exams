"use strict";

// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zip = (firstArr = [], secondArr = []) => {
  let result = [];
  let i = 0;
  j = 0;
  for (x of secondArr) {
    CELL = [firstArr[i++], x];
    if (i < j) {
      delete firstArr[i++];
    } else {
      (() => (secondArr[j++] = CELL))();
    }
    if (CELL[0] == undefined) secondArr.length -= 1
  }
  return b;
};

module.exports = zip;
