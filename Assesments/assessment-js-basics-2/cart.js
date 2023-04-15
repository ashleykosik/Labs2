///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((a, b) => a + b.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    let finalPrice = cartTotal * (tax + 1)
    finalPrice -= couponValue
    return finalPrice
}
console.log(calcFinalPrice(100, 50, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Information a store might want to collect from their customers
    would be first and last name and email address so they can send 
    marketing material to them. Those values would all be strings. 
    Getting a zipcode is often helpful for stores so they can see how 
    far their customers are driving to get to the store and make 
    informed decisions if they want to expand to a new location. 
    Zipcode is better than full address because people find that 
    often too personal. Zipcode will be stored as a number.
    A good example of a boolean value a store might want to get
    from customer would be if they have kids or not because those
    customers are going to buy things like juice boxes and more things 
    for holidays that other customers most likely are not.
    
    
    //the object being the customer information
    
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer = {
    firstName: 'Ashley',
    lastName: 'Kosik',
    hasKids: false,
    zipcode: 48438,
    emailAddress: 'ashley@gmail.com'
}