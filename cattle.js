const { database } = require('./database.js');

const roundup = (herdSize) => {
  const cattle = [];
  const types = database.cattleTypes;

  for (let counter = 0; counter < herdSize; counter++) {
    const randomType = Math.floor(Math.random() * types.length);
    const animal = types[randomType];
    cattle.push(animal);
  }
  return cattle;
};

const logCattleBreed = (cattleArr) => {
  for (const cattle of cattleArr) {
    console.log(cattle.breed + ',');
  }
};

module.exports = { roundup, logCattleBreed };
