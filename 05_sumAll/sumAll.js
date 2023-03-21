const sumAll = function (start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0 ) {
        return 'ERROR';
      }

      const min = Math.min(start, end);
      const max = Math.max(start, end);
    
      let sum = 0;
    
      for (let i = min; i <= max; i++) {
        sum += i;
      }
    
      return sum;
};

// Do not edit below this line
module.exports = sumAll;
