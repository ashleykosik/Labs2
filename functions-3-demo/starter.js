////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ') // creates splitStr array from input array[i]
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase() // changes all characters to lower case

            if (x !== 0) { //skips the first string/word
                word = word.charAt(0).toUpperCase() + word.slice(1)
                //first character is now uppercase + slice returns the rest of the word lowercase
            }

            camelCaseStr += word // as it loops returns words in one string
        }

        newArr.push(camelCaseStr) //push words into new array
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        //can chain methods str = str.toLowerCase().split(' ').join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE with higher functions
const copyArrAndChange = (arr, cb) => {
    return result
}

const copyToCamelCaseCB = str => {
    const splitStr = str.split(' ');
    let camelCaseStr = '';
    for(let i = 0; i <splitStr.length; i++) {
        let word = splitStr[i];
        word = word.toLowerCase();
        if (i !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
    }
}
////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////
const nums = [1, 2, 3, 4, 5, 6, 7]

//good to create a function that you can reuse
const multiplyBy10 = (num) => num * 10
for(let i =0; i < nums.length; i++) {
    //console.log(multiplyBy10 (nums[i]))
}

let mappedNums = nums.map(multiplyBy10)

//let mapNums = nums.map(nums[i] * 10) // i is not defined

//if you only need to map an array once
let mappedNumsShort= nums.map((num) => num * 10)


//console.log(nums)
console.log(mappedNumsShort)
/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']
const turnToPink = (color) => 'pink'

const mappedColors = colors.map(turnToPink)


//creates colors array into objects
const mapColors = colors.map((el) => {
    let primary = ['red', 'yellow', 'blue']
    let isPrimary = primary.includes(el)
    return {
        'color': el,
        'isPrimary': isPrimary

    }
})
console.log(mapColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = (names) => {
    // CODE HERE
    return names.map(name => `Hello ${name}`)
}
console.log(formalGreeting(formalNames))
// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']
//                                          if      (condition) === true then it will move to new array
const placesThatStartWithA = places.filter((city) => city.charAt[0] === 'A')
console.log(placesThatStartWithA)

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
const FindPerson = arr => {
    const filtered = arr.filter((person) => person.programmer)
    return filtered[0]
}
console.log(FindPerson(jobs))

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = (numbers) => {
    // Code here                           43 + 7
    return numbers.reduce((acc, curr) => acc + curr)
    return acc + curr
}
console.log(productOfArray(numsToReduce))

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = expenses.reduce((a, c) => a - c.amount, budget)
console.log(remaining
    
    )