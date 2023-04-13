// Write your code below
// function isPalindrome(word) {
//   let j = word.length - 1
//   for (let i = 0; i < (word.length - 1) / 2; i++) {
//     if (word[i] !== word[j]) {
//       return false
//     }
//     j--
//   }
//   return true
// }
let sample = `racecar`

function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if (word[i] !== word[j]) {
                return console.log(false)
            }
        }
        //j--
    }
    return true
}
isPalindrome(sample)