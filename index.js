var readlineSync = require("readline-sync");

const chalk = require("chalk");

var questions = [

  {
    question: "What is Gina's Last name?",
    answer: "Linetti"

  },

  {
    question: "What's the Pontiac Bandit's real name?",
    answer: "Doug Judy"

  },

  {
    question: "What's Charles' son's name?",
    answer: "Nikolaj"

  },

  {
    question: "Getting harder...who has NOT won a Halloween Heist?",
    answer: "Charles"

  },

  {
    question: "True or False?-Rosa marries Adrian Pimento",
    answer: "false"

  },

  {
    question: "What is Holt's middle name?",
    answer: "Jacob"

  },

  {
    question: "In Season 1, who wins the felony arrest bet, Jake or Amy?",
    answer: "Jake"

  },

  {
    question: "What does Rosa's landlord think her name is?",
    answer: "Emily Goldfinch"

  },

  {
    question: "In Season 7 we find out that Rosa has a dog. What's his name?",
    answer: "Arlo"

  },

  {
    question: "What do Jake and Amy name their son?",
    answer: "Mac"

  }

];

var score = 0;
var uName = readlineSync.question("What's your name?\n");

function game() {


  console.log("Hi " + chalk.yellowBright(uName) + " let's play a game to see how big of a Brooklyn99 fan you are!");

  console.log("\nWrong answers don't end the quiz, so we enourage you to play till the end, to see how much you score.\n\nNow, let's begin:")

  for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
  }
  console.log("Your final score is:" + score);
  showScore();

}



function play(q) {
  var ans = readlineSync.question("\n" + chalk.magentaBright(q.question) + "\n");
  if (ans.toUpperCase() === q.answer.toUpperCase()) {
    score++;
    console.log(chalk.green("Right answer!\n") + chalk.blue("Score:" + score) + "\n-------------------------------------------------------\n");
  }
  else
    console.log(chalk.red("Wrong answer!\n") + chalk.yellowBright("The correct answer is: " + (q.answer)) + chalk.blue("\nScore:" + score) + "\n-------------------------------------------------------\n");

}

var highScores =
  [
    {
      name: "Ameya",
      score: 9

    },

    {
      name: "Mohak",
      score: 7

    },

    {
      name: "Ashray",
      score: 5

    },

    {
      name: "Shruti",
      score: 8
    }

  ]

function showScore() {
  console.log("Looks like you made it on to the leaderboard!:");
  highScores.push({ name: uName, score: score });
  highScores.sort((a, b) => { return b.score - a.score });
  console.table(highScores);
}

game();