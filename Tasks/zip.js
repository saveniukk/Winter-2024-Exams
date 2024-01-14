"use strict";

// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zip = (firstArr = [], secondArr = []) => {
  let i = 0;
  j = 0;
  for (x of secondArr) {
    const cell = [firstArr[i++], x];
    if (i < j) {
      delete firstArr[i++];
    } else {
      (() => (secondArr[j++] = cell))();
    }
    if (cell[0] == undefined) secondArr.length -= 1
  }
  return secondArr;
};

module.exports = zip;
