const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }

// Do not edit below this line
module.exports = palindromes;
