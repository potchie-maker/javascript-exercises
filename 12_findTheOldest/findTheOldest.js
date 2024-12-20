const findTheOldest = function(people) {
 return people
    .map((person) => ({
      ...persn,
      yearOfDeath: person.yearOfDeath || new Date().getFullYear(),
    }))
    .sort((personA, personB) => (personB.yearOfDeath - personB.yearOfBirth) - (personA.yearOfDeath - personA.yearOfBirth))
    [0];
};

// Do not edit below this line
module.exports = findTheOldest;
