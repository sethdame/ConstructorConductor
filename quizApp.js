//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots 
//of user objects, and we're //also going to be creating lots of Question objects. Those 
//would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters
// and set them appropriatly

var User = function(name, email, password, totalScore) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore;
};



//Create a Question constructor that accepts title, answersArray, rightAnswer, and 
//difficulty parameters

var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
};


//Create a users Array which is going to hold all of our users.

var userArray = [];


//Let's say three people signed up for our service, create 3 instances of User and add 
//each to the users Array

userArray.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS', 3));
userArray.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags', 4));
userArray.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup', 5));


//Create a questions Array which is going to hold all of our questions

var questionsArray = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of 
//Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - 
//where === checks type and value"

//Fill in the rest of the required data as you see appropriate.

var question1 = new Question('Inheritance', 'true', 'true', 'easy');
var question2 = new Question('scripting', 'true', 'false', 'medium');
var question3 = new Question('Checking', 'true', 'true', 'hard');


//Now push all of your instances of Question into the questions Array

questionsArray.push(new Question("T/F: my name is Seth", [true, false], true, "easy"));
questionsArray.push(new Question());
questionsArray.push(new Question());

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're 
//both holding the right data.

for (var i = 0; i < userArray.length; i++)
	for (var j = 0; j < questionsArray.length; j++)
		console.log(i + j);