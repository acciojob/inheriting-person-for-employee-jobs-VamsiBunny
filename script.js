// Create the Person class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add the greet method to the Person class
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Create the Employee class that extends the Person class
function Employee(name, age, jobTitle) {
  // Call the Person constructor to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up inheritance: Employee inherits from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add the jobGreet method to the Employee class
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

