//Just like you can add methods to your own constructor, you can also add methods and 
//properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call 
//reverse and reverse itself.  Will need to use the 'this' thingymabobby.



String.prototype.reverse = function() {
	return this.split('').reverse().join('');
}