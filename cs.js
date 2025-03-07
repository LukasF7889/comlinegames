const input = process.argv.slice(2);
let output = "Translation: ";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//save shift value
const shift = parseInt(input[1]);

//check if shift ins number
if (input.length < 1) {
  console.error("Please enter at least 1 word");
  return;
}

if (isNaN(input[1])) {
  console.log("Please enter a number as second value");
  return;
}

const text = input[0]; // passes string into new variable
const words = text.split(" "); //splits words into an array

words.forEach((e) => {
  const currWord = e.split(""); //split word into single character array
  let translatedWord = "";
  currWord.forEach((i) => {
    const currPos = alphabet.indexOf(i); // get current position inside alphabet
    // const targetPosition = currPos + shift;
    const targetPosition = (currPos + shift + 26) % 26; //shift current number to target value. modulo makes sure that shift will stay inside the array
    const newLetter = alphabet.slice(targetPosition, targetPosition + 1);
    translatedWord += newLetter;
  });

  output += " " + translatedWord;
});

console.log(output);
