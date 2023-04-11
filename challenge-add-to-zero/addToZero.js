// Starting array
//In this code challenge you will check if any two numbers in an array add to zero.
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
            console.log(array[i] + array[j])
        }
    }
}