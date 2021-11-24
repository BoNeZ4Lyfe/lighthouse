const roller = process.argv.slice(2);
let numOfRolls = [];
for (let i = 0; i < roller; i++) {
  let rolledDice = Math.floor(Math.random() * 6);
  numOfRolls.push(rolledDice);
}
  
console.log('Rolled ' + roller + ' dice: ' + numOfRolls);