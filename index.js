//Quiz about general knowledge of India

var readlineSync = require("readline-sync");
var score = 0;


// array of objects of questions

var questionbank = [
  { question: "1. India is a federal union comprising twenty-eight states and how many union territories?\nA.6\nB.7\nC.8\nD.9\n ",
answer: "C" },

 { question: "2. Which of the following is the capital of Arunachal Pradesh?\nA.Itanagar\nB.Dispur\nC.Imphal\nD.Panaji\n ",  
answer: "A" },

  { question: "3. What are the major languages spoken in Andhra Pradesh?\nA.Odia and Telugu\nB.Telugu and Urdu\nC.Telugu and Kannada\nD.All of the above languages\n ",
   answer: "B" },
  
  { question: "4. In which of the following state, the main language is Khasi?\nA.Mizoram\nB.Nagaland\nC.Meghalaya\nD.Tripura\n ",
   answer: "C" },

  { question: "5. Which state has the largest area?\nA. Maharashtra\nB.Madhya Pradesh\nC.Uttar Pradesh\nD.Rajasthan\n ",
   answer: "D" },

  { question: "6. Which state has the largest population?\nA.Uttar Pradesh\nB.Maharastra\nC.Bihar\nD.Andra Pradesh\n ",
answer: "A" }
    
    ]

// data of highscores as array of objects again

var highScores = [
  {
    name: "Prabhat",
    score: 5
  },
  {
    name: "Rohit",
    score: 4
  },
  {
    name: "Manohar",
    score: 3
  }
]

function welcome(){
var userAnswer = readlineSync.question("May I have your name? ");
console.log("\nWelcome " + userAnswer + "! Let's play a Quiz and test your general Knowledge about India!");
console.log("__________________________\n")
}


// function about question and answer in the quiz

function play( question, answer){
var readlineSync = require("readline-sync");

  var userAnswer = readlineSync.question(question);
  console.log("You selected: " + userAnswer)

  if (userAnswer.toUpperCase() == answer.toUpperCase() ){
    console.log("You are right! ");
    score++;
  
  }
  else{console.log("You are wrong!")
      score--;
      }
  console.log("Your current score is: " + score);
  console.log("\n__________________________\n")
  
  
}



// fuction to execute index based array

function quiz(){
for(var i=0; i < questionbank.length;i++){
  var currentQuestion = questionbank[i];
  play(currentQuestion.question, currentQuestion.answer)
}
}

// fuction to print the current user's final score and the highscores already in the data

function printScore(){
  console.log("Great your final score is: " + score);
  console.log("_______________")
  console.log("Check out the high scores! ");
  for (var i = 0; i < highScores.length; i++ ){
    var currentHighScore = highScores[i];
    console.log(currentHighScore.name, ":",  currentHighScore.score)
  }
}


// fuction to check if the current user has beaten the highscore or not

function checkScore(){
  
  for( var i = 0; i < highScores.length; i++ ){
    var currentHighScore = highScores[i];
  }
  if ( score <= currentHighScore.score){
    console.log("You didn't beat the High score! ")
  }
  else{
    console.log("Hurray! You broke the record")
  }
}














welcome();
quiz();
printScore();
checkScore();