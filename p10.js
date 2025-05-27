// Student constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Method to print student details
Student.prototype.printDetails = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Method to print greeting after delay (demonstrates this problem)
Student.prototype.greetAfterDelay = function() {
  setTimeout(function() {
    // Here, 'this' will be undefined or window object (not student)
    console.log(`Hello, I am ${this.name}`);  // Wrong context
  }, 1000);
};

// Fixed method using bind to keep 'this' as Student object
Student.prototype.greetAfterDelayFixed = function() {
  setTimeout(function() {
    console.log(`Hello, I am ${this.name}`);
  }.bind(this), 1000);  // bind fixes 'this' to student object
};

// Example usage:
const student1 = new Student("Ravi", 20);

student1.printDetails();         // Name: Ravi, Age: 20
student1.greetAfterDelay();      // Hello, I am undefined (wrong this)
student1.greetAfterDelayFixed(); // Hello, I am Ravi (correct this)
