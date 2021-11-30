const findWaldo = (names, found) => {
  names.forEach((name, index) => {
    if (name === 'Waldo') {
      return found(index);
    } else {
      return '';
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index: ${index}`);
});
