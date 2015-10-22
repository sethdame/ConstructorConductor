//Create a Person constructor that accepts name and age as parameters and sets those 
//properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

//Now create three instances of Person with data you make up

var person1 = new Person('Tom Ford', 38);
var person2 = new Person('Ben Frank', 88);
var person3 = new Person('Jane Smith', 138);



//Now add a sayName method on your Person class that will alert the name of whatever 
//Person instance called it.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		alert(this.name);
	}
}

var me = new Person("Seth Dame", 27);

me.sayName();