////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

// 4 seperate functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// higher order function
const calculator = (num1, num2, callback) => {
  // check if input is number Number(num1) = +num1
  if(+num1 && +num2) {
    num1 = +num1
    num2 = +num2
    return console.log(callback(num1, num2))
  } else {
    return console.log(`please provide numbers only`)
  }
}
//call function replaces num1, num2, callback
calculator(10, 2, divide)



///////////////////////
////// PET STORE //////
///////////////////////

// arrays with objects in them
const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//apply discount by percentage (decimal)
const applyPercentDiscount = (product,discount ) => {
  product.displayPrice = product.basePrice * (1 - discount)
}
applyPercentDiscount(catProducts[0], .50)
console.log(catProducts)

//apply flate rate discount (whole number)
const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}
//for loop to go through products
const applyDiscounts = (productLine, callback, discount) => {
  for(let i = 0; i < productLine.length; i++) {
    callback(productLine[i], discount) 
    }
}
applyDiscounts(dogProducts, applyFlatDiscount, 1)
console.log(dogProducts)
applyDiscounts(catProducts, applyPercentDiscount, .20)
console.log(catProducts)

// apply discount by category
const categoryDiscount = (productLine, callback, discount, category) => {
  for(let i = 0; i < productLine.length; i++) {
    if (productLine[i].category === category) {
      callback(productLine[i], discount)
    }
  }
}
categoryDiscount(dogProducts, applyFlatDiscount, 2, 2)

//apply discount to invetory
const applyDiscountByInventory = (productLine, callback, discount, amount) => {
  for(let i = 0; i < productLine.length; i++)
    if (productLine[i].inventory < amount) {
      callback(productLine[i], discount)
    }
}
applyDiscountByInventory(dogProducts, applyPercentDiscount, .25, 50)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
const makeSandwich = (bread) => {
  return (ingredients) => {
    let order = `you ordered a ${bread} bread sandwich with `
    //loop over ingredients array
    for(let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length - 1 && i !== 0) {
        order += `and ${ingredients[i]}`
      } else if (ingredients.length === 1) {
        order += `${ingredients},`
      } else {
        order += `${ingredients[i]},`
      }
    }
    return order
  }
}

const mySandwich = makeSandwich(`rye`)
console.log(mySandwich(['bacon', 'lettuce', 'tomato']))