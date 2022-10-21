let cartSet = new Set();

if (localStorage.getItem('storedRolls') != null) {
  retrieveFromLocalStorage();
}


//set up arrays

//glazes and prices array
let glazeInfo = [
  { glazingOptions: "Keep Original", glazingPrice: 0.00 },
  { glazingOptions: "Sugar Milk", glazingPrice: 0.00 },
  { glazingOptions: "Vanilla Milk", glazingPrice: 0.50 },
  { glazingOptions: "Double Chocolate", glazingPrice: 1.50 }
]

//pack sizes and prices array
let packInfo = [
  { packSize: "1", packPrice: 1 },
  { packSize: "3", packPrice: 3 },
  { packSize: "6", packPrice: 5 },
  { packSize: "12", packPrice: 10 },
]

//update option using for loop w/.js


// When the page loads, find the Glaze select element.
let selectGlaze = document.querySelector("#glazes");

for (let i = 0; i < glazeInfo.length; i++) {
  // create HTML element
  const option = document.createElement('option');
  // access value in array
  option.value = glazeInfo[i].glazingOptions;
  // update blank HTML w/type of glaze 
  option.innerHTML = glazeInfo[i].glazingOptions;
  // append to HTML element
  selectGlaze.appendChild(option);
}


// When the page loads, find the Pack Size select element.
let selectPackSize = document.querySelector("#packsizes");

for (let i = 0; i < packInfo.length; i++) {
  // create HTML element
  const option = document.createElement('option');
  // access value at array 
  option.value = packInfo[i].packSize;
  // update blank HTML w/pack size
  option.innerHTML = packInfo[i].packSize;
  // append to pack size dropdown
  selectPackSize.appendChild(option);
}


// Set constants + variables
let basePrice = 2.49;
let glazingPrice = 0.00;
// let packSize = 1;
let packPrice = 1;

//function to trigger price update based on user selections in the drop down
function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;

  //retrieve glaze object corresponding to the selected option

  //loop through array
  for (let i = 0; i < glazeInfo.length; i++) {

    //find out if item in dropdown selection equals item in array
    if (glazeInfo[i].glazingOptions == element.value) {

      //if so, set glazingPrice variable to price addition
      glazingPrice = glazeInfo[i].glazingPrice;
    }
  }

  //retrieve pack size object corresponding to the selected option
  for (let i = 0; i < packInfo.length; i++) {
    if (packInfo[i].packSize == element.value) {
      packPrice = packInfo[i].packPrice;
    }
  }

  //calculate total price based on glaze selection + quantity
  let totalPrice = ((basePrice + glazingPrice) * packPrice);

  //update total price according to the change
  document.getElementById("totalprice").innerHTML = ('$' + totalPrice.toFixed(2));


}

cart = [];

//Parse the URL parameter and store the current roll type as a variable

// get the query string from the URL 
const queryString = window.location.search;

// use the query string to create a URLSearchParams object
const params = new URLSearchParams(queryString);

// access the parameter we want using the "get" method (e.g. stuff after roll)
const chosenRoll = params.get('roll');

// variable = chosenRoll (which is storing the current roll type as a variable)



// Use the URL parameter to update page

const rollName = chosenRoll + ' cinnamon roll';
const rollBasePrice = rolls[chosenRoll].basePrice;
const rollImage = './Assets/hw-1-assets/' + rolls[chosenRoll].imageFile;

//update roll name
document.querySelector('#pagetitle').innerText = rollName;

//update roll price
document.querySelector('#totalprice').innerText = '$' + rollBasePrice;

//update roll image link
document.querySelector('.donut-flavor-static').src = rollImage;

//update base price variable
basePrice = rollBasePrice;


//create maps to grab values for rollGlazing and packSize adjustments
const glazePriceMap = {
  'Keep Original': 0.0,
  'Sugar Milk': 0.0,
  'Vanilla Milk': 0.50,
  'Double Chocolate': 1.50
}

const packPriceMap = {
  '1': 1,
  '3': 3,
  '6': 5,
  '12': 10
}


//Roll class
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing; // this is a string-- need to get the price adaptation based on the string to calculate total price
    this.size = packSize; //need to get pack size adjustment based on pack size
    this.basePrice = rollPrice;

    this.calculatedPrice = calculatePrice(this.basePrice, glazePriceMap[this.glazing], packPriceMap[this.size]);
  }
}

//attempt 3 modeled after pui note
function addToCart() {

  let newRoll = createCartRoll(chosenRoll, selectGlaze.value, selectPackSize.value, basePrice);
  // fillCart(newRoll);
  cartSet.add(newRoll);
  console.log(cartSet);
  saveToLocalStorage();
}

function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem('storedRolls');
  if (rollArrayString) {
    const rollArray = JSON.parse(rollArrayString);
    cartSet = new Set(Array.from(rollArray));
  }
  console.log(cartSet);
}



function saveToLocalStorage() {
  const rollArray = Array.from(cartSet);
  const rollArrayString = JSON.stringify(rollArray);
  localStorage.setItem('storedRolls', rollArrayString);
}

//Function to calculate the total price of an item based on adjustments
function calculatePrice(basePrice, glazingPrice, packPrice) {
  return (basePrice + glazingPrice) * packPrice;
}


//function to replace hardcoding the rolls (to create new Roll objects)
function createCartRoll(rollType, rollGlazing, packSize, rollPrice) {
  const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
  cartSet.add(newRoll);
  return newRoll;
}




