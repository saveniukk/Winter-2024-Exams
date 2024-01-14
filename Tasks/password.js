'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  if (length <= 0) return '';

  const indexMax = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * indexMax);
    password += alphabet[randomIndex];
  }

  return password;
};

module.exports = generatePassword;

