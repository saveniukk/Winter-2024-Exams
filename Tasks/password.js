'use strict';

// Generate random password

const generatePassword = (alphabet, length) => {
  if (length <= 0) return '';

  const indexMax = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomFloat = Math.random();
    const scaledRandom = randomFloat * indexMax;
    const randomIndex = Math.floor(scaledRandom);
    password += alphabet[randomIndex];
  }

  return password;
};

module.exports = generatePassword;

