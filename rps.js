const input = process.argv.slice(2);

//Result Function

const result = (determineResult = (input, npc) => {
  if (input == npc) {
    console.log(`Draw. Players Choice: ${input}, NPC Choice ${input}`);
  }
});

// NPC Choice

const options = ["rock", "paper", "scissors"];

const npcChoice = options[Math.floor(Math.random() * options.length)];

console.log(npcChoice);

//User Input
if (input.length != 1) {
  console.error("Please enter only one value");
  return;
}

switch (input[0]) {
  case "rock":
    determineResult(input[0], npcChoice);
    break;
  case "paper":
    determineResult(input[0], npcChoice);
    break;
  case "scissors":
    determineResult(input[0], npcChoice);
    break;
  default:
    console.error("Enter rock, paper or scissors!");
    return;
}

console.log(input[0]);
