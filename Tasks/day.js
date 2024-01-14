"use strict";

// Get day number

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  for (const day of days){
    const lowercaseDay = day.toLowerCase();

    if (str.startsWith(lowercaseDay)) {
      return days.indexOf(day) + 1;
    }
  }
  return -1;
};

module.exports = parseDay;

