const input = process.argv.slice(2);

//Result Function
const determineResult = (input, npc) => {
  //CHECK DRAW
  if (input == npc) {
    console.log(`Draw. Players Choice: ${input}, NPC Choice ${input}`);
    return;
  }

  // CHECK WIN
  if (
    (input == "rock" && npc == "scissors") ||
    (input == "scissors" && npc == "paper") ||
    (input == "paper" && npc == "rock")
  ) {
    console.log(`You chose ${input}, the NPC chose ${npc} - You Win!`);
    return;
  } else {
    console.log(`You chose ${input}, the NPC chose ${npc} - You LOSE!`);
    return;
  }
};

// NPC Choice
const options = ["rock", "paper", "scissors"]; //Array of options
const npcChoice = options[Math.floor(Math.random() * options.length)]; //Choosing a random value

//User Input
//Check if only one value is entered
if (input.length != 1) {
  console.error("Please enter only one value");
  return;
}

//Check if entered value is a valid option
if (options.includes(input[0])) {
  determineResult(input[0], npcChoice); //if yes, call function
} else {
  console.error("Please enter rock, paper or scissors");
  return;
}
