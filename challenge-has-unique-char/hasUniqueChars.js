// Write your code below
//Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true

let sample = `bob`

function uniqueChars(word) {
let array = word.split('')
for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
        if (word[i] === word[j]) {
            return false
        }
        }
    }
    return true
}

console.log(uniqueChars(sample))