const args = process.argv.slice(2);

if (args.length !== 2) {
  //if args has more or less than 2 values
  console.error("Please provide exactly two numbers");
  return;
}

//put input into variable

num1 = parseFloat(args[0]);
num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Please provide exactly two numbers");
  return;
}

const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
