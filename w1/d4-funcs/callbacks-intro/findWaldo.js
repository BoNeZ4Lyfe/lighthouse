const findWaldo = function(names, found) {
  for (let name of names) {
    let index = names.indexOf('Waldo');
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  }
};

const actionWhenFound = function(index) {

  console.log(`Found Waldo at index: ${index}`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);




//CODE WHEN FOR EACH IS APPLIED
const findWaldo = (names, found) => {
  names.forEach((name, index) => {
    if (name === 'Waldo') {
      return found(index);
    } else {
      return '';
    }
  });
};
const actionWhenFound = function(index) {

  console.log(`Found Waldo at index: ${index}`);
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
