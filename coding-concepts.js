// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: ["E", "c", "h", "o", " ", "2", "0", "2", "1"]
// b) Verify and explain: The split() method splits a string into an array and then returns a new array (it dosen't change the original string).


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undifined
// b) Verify and explain: It doesn't have a return after it passes the parameter (name). It hasn't been called or invoked a function.
// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The .map() method goes through every index and element in an array and calls/performs the function for each element in an array then returns an array that has different value.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The .filter() method acts on an array, takes parameter value, makes a decision and evaluation if it's true or false (boolean value), then returns a result (a new array).


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: It's a dot notation is used for accessing object properties. In this case is looking for an object called myCodingSkills - languages and the index 0 which is JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Delta", year: 2021}
// b) Verify and explain: Classes are blueprints/templates for objects and var learnStudent = new Learn("George") -- this code crates an instance of a class Learn (a new object). We can pass properties in parameter (name) so in this case it passes "George" to name. You will get {student: "George", cohort: "Delta", year: 2021}
