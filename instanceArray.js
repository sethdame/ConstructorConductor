/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
	this.name = name;
	this.email = email;
	this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var userArray = [];

//Now create and push into your users array 3 seperate instances of User using the data 
//from above in that exact order

userArray.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
userArray.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
userArray.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));


//Console.log all of Tylers information

console.log('Tyler\'s information is ' + userArray[0]);


//Now console.log all of Lennys information

console.log('Lenny\'s information is ' + userArray[1]);


//Now create another instance of User using your own information and then add that to 
//your users array.

userArray.push(new User('Seth', 'sethdame@gmail.com', 'password'));


//Now loop through your users Array and console.log every users name. 
for (var i = 0; i < userArray.length; i++)
	console.log('All my users names are ' + userArray[i].name);