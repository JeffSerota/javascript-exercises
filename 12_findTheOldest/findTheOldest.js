const findTheOldest = function(people) {
        let today = new Date();
        let oldestPerson = people[0];
      
        people.forEach(person => {
          let yearOfDeath = person.yearOfDeath || today.getFullYear();
          let age = yearOfDeath - person.yearOfBirth;
          let oldestAge = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : today.getFullYear() - oldestPerson.yearOfBirth;
      
          if (age > oldestAge) {
            oldestPerson = person;
          }
        });
      
        return oldestPerson;
      }
      

// Do not edit below this line
module.exports = findTheOldest;
