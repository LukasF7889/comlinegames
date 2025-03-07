const input = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u"];
const output = "Translation: ";

if (input.length < 1) {
  console.error("Please enter at least 1 word and no numbers");
  return;
}

const piggy = (input, output) => {
  input.forEach((e) => {
    const word = e.split(""); //Split Words into arrays with single letters

    //Check if first is vowel
    if (vowels.includes(word[0])) {
      // if first letter is a vowel
      word.push("way");
    } else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
      //first letter is consonant, second is vowel
      const firstLetter = word.shift(); //return first letter
      word.push(firstLetter, "ay"); // push first letter to the end, add ay
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
      //first two are consonants
      const firstLetters = word.slice(0, 2); //get first 2 letters
      word.splice(0, 2); //remove first 2 letters
      word.push(firstLetters[0], firstLetters[1], "ay"); //push first 2 letters to the end, add ay
    }

    output += " " + word.join(""); // add word to output
  });

  console.log(output);
};

piggy(input, output);
