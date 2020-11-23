// bonus homework: has the user beaten high score?

var readlineSync = require("readline-sync");
var quesposition = 0; // Question position variable
var position = 0;
var score = 0; // score counter
console.log("Welcome to Manish Raj's quiz on how much are you familiar with him.");
var userName = readlineSync.question("What is your name? ");

//Storing highscore in the array of objects
var highScore = [{
  name: 'Manish Raj  ',
  score: 10
},{
  name: 'Avnish Raj   ',
  score: 9
},{
  name: 'Sweta Kumari ',
  score: 8
},{
  name: 'Vinayak Kumar',
  score: 6
},{
  name: 'Nishant Kumar',
  score: 6
}];
//Storing the question's of Manish Raj's quiz on how much are you familiar with him.
var AboutManishRajQuiz = [{
		question: `
      1. What is Manish NickName?
      a: Raja Babu
      b: Golu Babu
      c: Chhotu
      d: Raja\n`,
        answer: "a"
	},{
		question: `
      2. From which school he had completed his schooling?
      a: R.V.S ACADEMY
      b: RAJENDRA VIDAYLAYA
      c: HILL TOP
      d: M.N.P.S SCHOOL\n`,
        answer: "a"
	},{
		question: `
      3. What is his age?
      a: 22
      b: 21
      c: 23
      d: 20\n`,
        answer: "c"
	},{
		question: `
      4. What is his favoriate fast food?
      a: Chowmin
      b: Veg-Roll
      c: Momos
      d: Vada Paw\n`, 
        answer: "a"
	},{
		question: `
      5. Who is his favoriate cricketer?
      a: M.S Dhoni
      b: Virat Kholi
      c: Rohit Sharma
      d: KL Rahul\n`,
          answer: "a"
	},{
		question: `
      6. Who is his favoriate Singer?
      a: Arijit Singha
      b: k.k
      c: Vishal Mishra
      d: Papoon\n`,
          answer: "d"
	},{
		question: `
      7. Where is his favoriate visting place?
      a: Moutain Side
      b: Sea Beach
      c: Crowded Place
      d: Park\n`,
          answer: "b"
	},{
		question: `
      8. What is his favoriate Sport?
      a: VolleyBall
      b: BasketBall
      c: Cricket
      d: FootBall\n`,
          answer: "d"
	},{
		question: `
      9. Who is his favoriate Actor?
      a: Ajay Devgan
      b: Raj Kumar Rao
      c: Manoj Bajpai
      d: Hritik Roshan\n`,
          answer: "b"
	},{
		question: `
      10. Which is his favoriate Subject?
      a: English
      b: Physics
      c: Mathematics
      d: Science\n`,
          answer: "c"
}];


// starting the quiz
startingthequiz();  
function startingthequiz() {
    var answer = readlineSync.question("I challenge you to play this Manish Raj's quiz on how much are you familiar with him. \n Press 0 to exit, or any other key to continue the quiz.  ");
    console.log("-------------------------------------");
    if(answer.toLowerCase() !== "0"){
      console.log("Hello " + userName + ", Welcome to Manish Raj's quiz on how much are you familiar with him.");
      console.log("-------------------------------------");
      console.log("Rules are as follows : 1. Every Correct answer will give you 2 marks.\n                       2. Every InCorrect answer will reduce your marks by 1.");
      console.log("-------------------------------------");
      console.log("Welcome " + userName + ", to the Quiz");
      console.log("-------------------------------------");
      console.log("LeaderBoard : \n");
      for(var i=0;i<highScore.length;i++){
        console.log(highScore[i].name + " " + highScore[i].score);
      }
      console.log("-------------------------------------");
      for(var i=0;i<AboutManishRajQuiz.length;i++){
        question(AboutManishRajQuiz[i].question, AboutManishRajQuiz[i].answer);
        console.log("-------------------------------------");
      }
    }else{
      console.log("-------------------------------------");
      console.log("Ohh no " + userName +  ", you haven't played the Quiz. It seems you are not the Fan of The Avenger:End-Game! ");
      console.log("Your Score is  :  "   +   score);
      console.log("-------------------------------------");
    }
}

//to check the correctness of question's from level one of the quiz
function question(question, answer) {
	 var answer = readlineSync.question(question);
		if (answer.toLowerCase() == AboutManishRajQuiz[quesposition].answer.toLowerCase()) {
			console.log("Correct Option");
      score = score + 1;
			quesposition = quesposition + 1;
      checking();
		} else {
      score = score - 1;
      console.log("InCorrect Option");
      console.log("Correct Option is : " + AboutManishRajQuiz[quesposition].answer);
      quesposition = quesposition + 1;
      checking();
		}
}

//checking if the quesposition has reached the end of the array of object
function checking(){
    if (AboutManishRajQuiz.length == quesposition) {
      console.log("-------------------------------------");
          console.log("Thanks for playing this quiz");
      console.log("Your Score is   :   " + score);
      //calling the function for high score
      highScoreCal();
      }
  }

//writing function for cheching the score
var x = false;
var j = 0;
var nameofloser;
function highScoreCal(){
  console.log("-------------------------------------");
  for(var i=0;i<highScore.length;i++){
    if(score >= highScore[i].score){
      x = true;
      j = i;
      nameofloser = highScore[i].name;
      highScore.push({name: userName, score: score});
      break;
    }
  }
  if(x){
    console.log("You defeated " +nameofloser+ ", now you hold that position");
    console.log("-------------------------------------");
    console.log("New LeaderBoard : \n");
    highScore.sort(function (a, b) {
      return a.score - b.score;
    });
    for(var k=highScore.length-1;k>=0;k--){
      console.log(highScore[k].name + " " + highScore[k].score);
    }
  }else{
      console.log("You haven't defeated anyone in the LeaderBoard. Better Luck Next Time.")
    }
}