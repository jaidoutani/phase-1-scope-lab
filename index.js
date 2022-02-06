//Use var to declare all variables except when specifically instructed otherwise! 

//Declare a variable in global scope called customerName using the var keyword.
var customerName = "bob"
const leastFavoriteCustomer = "Karen" 

//Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//Write a function that when called, declares a variable called bestCustomer in global 
//scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = "not bob";
}

//Write a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

//Declare a constant (using the const keyword) in global scope and assign it some initial value
//Write a function that attempts to change that constant 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Susan";
}