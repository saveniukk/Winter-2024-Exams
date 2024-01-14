'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  if (length <= 0) {
    return '';
  }
  
  const indexMax = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * indexMax);
    password = password + alphabet[Index];
  }
  return password;
};

module.exports = GeneratePassword;
