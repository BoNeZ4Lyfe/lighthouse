const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  let ms = Number(i) * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ms);

}