// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// Note:
    // Students are expected to use a variety of higher order
    // functions that can be called from JS arrays (since arrays
    // are actually a type of object in JS, these functions are
    // called "higher order array methods"). The mental effort
    // associated with using these functions primarily comes from
    // writing the callbacks as arguments for them.

    // This can be conceptually challenging
    // for students, as a given higher order function is what
    // invokes the callback the developer writes, but the code
    // for the higher order function is hidden to the developer.
    // The developer must rely on documentation of the array
    // functions to know how they use the callback, and to know
    // how the callback must be written.

// *** Problem 1 ***
//  Students should be able to use the array's map method

// 1.1
//  Given an array of numbers, map1, using the map method,
//  create a new array named map2 that contains all the numbers
//  from map1 subtracted by 1.

let map1 = [1, 2, 3, 4, 5]
let map2 = map1.map((el) => el - 1)
console.log(map2)

//same as 
const cb = ((el) => el - 1)
let map2o = map1.map(cb)

// 1.2
//  Using the map method, create a new array, map3, that is
//  the same as map1, except for all the numbers are converted
//  to the string data type.
const map3 = map1.map((el) => el.toString())


// 1.3
//  Given an array of objects, map4, using the map method,
//  create a new array, map5, has all of the object's name
//  properties appended with the string "President ".
//  For example, if the name property of an object was
//  "George", the new array's object's name property should
//  be "President George".

const map4 = [
    {
        name: 'Joe',
        hobby: 'Football',
    },
    {
        name: 'Donald',
        hobby: 'Golf',
    },
    {
        name: 'Barak',
        hobby: 'Basketball',
    },
    {
        name: 'George',
        hobby: 'Painting',
    },
]
// add President to all names
let map5 = map4.map((el) => 'President ' + el.name)
// or `President ${el.name}`

// for only George
let map6 = map4.map((el) => {
    if (el.name === 'George') {
        return 'President ${el.name}'
    }
})

// *** Problem 2 ***
//  Students should be able to use the array's filter method

// 2.1
//  Given an array of numbers, arrNum, create a new array
//  using the filter method that contains only odd numbers.

const arrNum = [1, 5, 6, 8, 0, 19, -2]
const oddNum = arrNum.filter((num) => num % 2 !== 0)
console.log(oddNum)

// // 2.2
// //  Using the array from 2.1, arrNum, create a new array
// //  using the filter method that only contains odd numbers
// //  that have an odd array index in the original array.
const oddNum2 = arrNum.filter((num, idx) => num % 2 !== 0 && idx % 2 !== 0)
console.log(oddNum2)


// 2.3
//  Given an array of strings, arrString, create a new array
//  using the filter method that only contains strings that
//  contain the lowercase letter 'a'.

const arrString = [
    'gravy',
    'steak',
    'potatoes',
    'cheese',
    'coke',
    'green beans',
    'oranges'
]

const arrfilt = arrString.filter((el) => el.includes('a'))
console.log(arrfilt)

// *** Problem 3 ***
//  Students should be able to use the array's forEach method

// 3.1
//  The block of code directly below this uses a for loop.
//  Write your own code that has the same result as this code
//  block, but does it using the forEach method. You may use
//  the 'theNumArr' variable, but will need to declare a new
//  variable to keep track of your sum.

let sum = 0
let theNumArr = [5, 6, 7, 7, 8, 56, 9, 10]
for (let i = 0; i < theNumArr.length; i++) {
    sum += theNumArr[i]
}

let newSum = 0;
theNumArr.forEach((el) => newSum += el)
console.log(newSum)


// 3.2
//  Solve problem 1.1 using the forEach method instead of the
//  map method. Also, the variable of your new array should be
//  called myNewArray1 instead of map2.
const myNewArray1 = []
map1.forEach((el) => myNewArray1.push(el-1) )
console.log(myNewArray1)


// 3.3
//  Solve problem 1.1 using the forEach method instead of the
//  map method, only this time, don't create a new array:
//  modify the original map1 array (this is called "in place"
//  modification).
map1.forEach((el, idx, arr) => arr[idx] = el - 1)
console.log(map1)
// arr is map1 because its tied to the forEach

// *** Problem 4 ***
//  Students should be able to use the array's reduce method

// 4.1
//  Given an array of numbers, reduce1, use the reduce method
//  to sum all of the numbers together. Save this sum to a variable.

const reduce1 = [30, 40, 70, 10, 50]

let sumReduce = reduce1.reduce((a, c) => a + c)
console.log(sumReduce)

// 4.2
//  Like problem 4.1, use the reduce method to sum all of the numbers
//  inside of the array reduce1 together. However, this time, your
//  sum should have an initial value of 100. You must accomplish this
//  by making the second argument of your reduce method invocation to be
//  this initial value. Save your sum to a new variable.
let sumReduce2 = reduce1.reduce((a, c) => a + c, 100)
console.log(sumReduce2)


// 4.3
//  objArr is an array of objects, as seen below. Use the reduce method
//  to create a single string that is a conglomeration of all of the
//  name attributes of all of the objects, and save the result to a variable.
//  If done correctly, the resulting string for objArr will be
//  "JoeDonaldBarakGeorge". Hint: you will likely need to use the
//  typically-optional second parameter (initial value) of the reduce method.

let objArr = [
    {
        name: 'Joe',
        hobby: 'Football',
    },
    {
        name: 'Donald',
        hobby: 'Golf',
    },
    {
        name: 'Barak',
        hobby: 'Basketball',
    },
    {
        name: 'George',
        hobby: 'Painting',
    },
]

const conglomerate = objArr.reduce((a, c) => a + c.name, '')
console.log(conglomerate)
