/* Write your code below this line.
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
(That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
// returns (3, 7)
luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)
*/
 let possibleNumbers = [1,2,3,4,5,6,7,8,9,10]
 
//  
//  Outputs random numbers

 function luckyNumbers1(num) {
 for (let i = 1; i <= num; i++){
    console.log(Math.floor(Math.random() * 10) +1)
 }
}

//luckyNumbers(10)

// outputs numbers into an array

let luckyNumbers = []
function luckyNumbersAr(n) {
    for (let i = 1; i <= n; i++){
       luckyNumbers.push(Math.floor(Math.random() * 10) +1)
    }
    return console.log(luckyNumbers)
   }
luckyNumbersAr(5)

// outputs only unique numbers into an array

let luckyNumbers2 = []
function luckyNumbersArr(n) {
   let randomNumber = Math.floor(Math.random() * 10) +1
    for (let i = 1; i <= n; i++){
    if (!luckyNumbers2.includes(randomNumber)){
    luckyNumbers2.push(randomNumber)
}
}
return luckyNumbers2.splice(0, n)
}
console.log(luckyNumbersArr(6))


let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
//functional programming
function getWage(baseSalary, overtime, rate) {
   return baseSalary + (overtime * rate)
}

//vs
//object oriented programming
let employee = {
   baseSalary: 30_000,
   overtime: 10,
   rate: 20,
   getWage: function() {
      return this.baseSalary + (this.overtime * this.rate)
   }
}
employee.getWage()