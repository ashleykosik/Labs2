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
function luckyNumbersAr(n) {
    for (let i = 1; i <= n; i++){
       luckyNumbers2.push(Math.floor(Math.random() * 10) +1)
    } if (!randomNumbersAr.includes(randomNumber)){
    randomNumbersArr.push(randomNumber)
}
}
return randomNumbersArr.splice(0, num)
}
console.log(luckyNumbers(6))