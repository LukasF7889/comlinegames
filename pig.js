const input = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u"];
const output = "Translation: ";

if (input.length < 1) {
  console.error("Please enter at least 1 word and no numbers");
  return;
}

const piggy = (input, output) => {
  input.forEach((e) => {
    //Split Words into arrays with single letters
    const word = e.split("");

    //Check if first is vowel
    if (vowels.includes(word[0])) {
      // if first letter is a vowel
      word.push("w", "a", "y");
    } else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
      //first letter is consonant, second is vowel
      const firstLetter = word.shift();
      word.push(firstLetter, "a", "y");
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
      //first two are consonants
      const firstLetters = word.slice(0, 2);
      word.splice(0, 2);
      console.log(word);
      console.log(firstLetters);
      word.push(firstLetters[0], firstLetters[1], "a", "y");
      console.log(word);
    }

    output += " " + word.join("");
  });

  console.log(output);
};

piggy(input, output);
