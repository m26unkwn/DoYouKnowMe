const readlineSync = require("readline-sync");

const questions= [
  {question: "what is my favorite food ",
  answer: "longlatta"},
  {question: "my fav footballer ",
  answer: "Ronaldo"},
  {question: "Do i Like Music? Yes/No ",
  answer: "Yes"},
  {question: "Do i love Cricket? Yes/ No ",
  answer:"Yes"},
  {question: "My best friend? ",
  answer: "Krishna"}
]


let score = 0;

function welcome(){

  console.log("______Do You Know Me_______:0")
   var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName.toUpperCase() + " to DO YOU KNOW me?");
}

// Game Logic

function play(questions, answers){
  var userAnswers = readlineSync.question(questions);
  if (userAnswers.toLowerCase() === answers.toLowerCase()){
    console.log("Hooray !You scroed ;)");
    score+=1;
  }
  else{
    console.log("You don't know about this :(")
  }
  console.log("You scored " + score + ".");
  console.log("____---____");

}


function game (){
  for (let i = 0; i<questions.length; i++){
    let currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)

  }
}

function showScores(){
    console.log("Hey! You SCORED: ", score);
    if(score>=3){
      console.log("you know me very well");
    }
    else{
      console.log("\"you don't know me:(\"\n. No Problem, You can mail me at monyou1mail@gmail.com :)");

    }
}

welcome();
game();

showScores();

