// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//var num1 = 15
// Expected output: "15 is divisible by three"
//var num2 = 0
// Expected output: "0 is divisible by three"
//var num3 = -7
// Expected output: "-7 is not divisible by three"

//1. "describe" the name of the function in this case I'll name it "divisibleBy"
//2. "it" is the next step. I'll describe the "divisibleBy" function does. I'll explain it in a string or plain words/sentenses like "takes a number as an argument and decides if the number is evenly divisble by three or not"
//3. "expect and toEqual" I'll call on the divisibleBy() function, followed by the .toEqual() matcher that checks the expected output of the function return.
// I'll add the expect 18 and I'll add the toEqual 18 is divisible by three
// add more expect 10 and I'll add the toEqual 10 is not divisible by three
//4. I'll run the test on yarn jest -- expect the test to fail (get the red)
//5. I'll make the function "divisibleBy" using method (num % 3 === 0) return num is divisible by three
//6. Run the test -- get the green
//7. Refactor the code if needed (make it more prettier)

describe("divisibleBy", () => {
  it("takes a number and decides if the number is evenly divisble by three or not based on the input", () => {
    expect(divisibleBy(18)).toEqual("18 is evenly divisible by 3")
    expect(divisibleBy(10)).toEqual("10 is not evenly divisible by 3")
  })
})
// // Got the red ---


// // b) Create the function that makes the test pass.

//var num3 = -7
// Expected output: "-7 is not divisible by three"

const divisibleBy = (number) => {
  if(number % 3 === 0) {
    return `${number} is evenly divisible by 3`
  } else {
    return `${number} is not evenly divisible by 3`
  }
}
// // Got the green ---


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.
//
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//1. "describe" the name of the function "capFirstLetter"
//2. "it" takes every index and element in the array and change the first letter from lower case to upper case
//3. "expect and toEqual" I expect streetlamp toEqual Streetlamp
//4. Run the test in yarn jest -- it will fail (red)
//5. Create a function / write a code using .map() and make the first index of a string in array to toUpperCase()
//6. Run the test in yarn jest -- expect the green
//7. Refactor -- make code looks more readable and well-organized if needed

describe("capFirstLetter", () => {
  it("takes in an array of words and returns an array with all the first letter of the words capitalized", () => {
  expect(capFirstLetter(["cake", "cookie", "donut", "chocolate", "tiramisu"])).toEqual(["Cake", "Cookie", "Donut", "Chocolate", "Tiramisu"])
  })
})
// I got red

// // b) Create the function that makes the test pass.
//1. create a capFirstLetter function and declare a function that takes in an array
//2. create a local variable that maps through the array
//3. with each value access the first index and capitalize the letter then concatenate the rest of the word value[0].toUpperCase + value.substring(1)
//4. return the value

//var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

const capFirstLetter = (array) => {
  let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
  return eachItem
}

// I got green -- this one is difficult, I did some googling.


// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.
//
// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2

//1. "describe" the name of the function "firstVowel"
//2. "it" takes in a string and return the index of the first vowel of the string : a,e,i,o,u (lower cases)
//3. "expect and toEqual" I expect "smile" toEqual 2 (i = index 2)
//4. Run the test in yarn jest -- it will fail (red)
//5. Create a function / write a code using .searh() looking for the first vowel of the string and return the result
//6. Run the test in yarn jest -- expect the green
//7. Refactor -- make code more well-organized if needed

describe("firstVowel", () => {
  it("takes in a string and return the index of the first vowel of the string", () => {
    expect(firstVowel("smile")).toEqual(2)
    expect(firstVowel("happy")).toEqual(1)
  })
})
//I got red

// // b) Create the function that makes the test pass.

//1. name the function firstVowel
//2. Make array as a parameter to loop through every letters in a string
//3. Use array.search() to get the vowels and return an index of the first vowels
//4. return the vowel (result)

// var vowelTester3 = "challenges"
// // Expected output: 2
const firstVowel = (array) => {
  let vowel = array.search(/[a,e,i,o,u]/)
  return vowel
}
//I got green
