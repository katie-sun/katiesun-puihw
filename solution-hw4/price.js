//set up arrays

//glazes and prices array
let glazeInfo = [
  {glazingOptions:"Keep Original", glazingPrice: 0.00},
  {glazingOptions:"Sugar Milk", glazingPrice: 0.00},
  {glazingOptions:"Vanilla Milk", glazingPrice: 0.50},
  {glazingOptions:"Double Chocolate", glazingPrice: 1.50}
]

//pack sizes and prices array
let packInfo = [
  {packSize:"1", packPrice: 1},
  {packSize:"3", packPrice: 3},
  {packSize:"6", packPrice: 5},
  {packSize:"12", packPrice: 10},
]

//update option using for loop w/.js

// When the page loads, find the Glaze select element.
let selectGlaze = document.querySelector("#glazes");
for (let i = 0; i < glazeInfo.length; i++){
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
for (let i = 0; i < packInfo.length; i++){
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
let packSize = 1;
let packPrice = 1;

//function to trigger price update based on user selections in the drop down
function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;

  //retrieve glaze object corresponding to the selected option
  
  //loop through array
  for (let i =0; i<glazeInfo.length; i++){     

    //find out if item in dropdown selection equals item in array
    if (glazeInfo[i].glazingOptions == element.value){ 

      //if so, set glazingPrice variable to price addition
      glazingPrice = glazeInfo[i].glazingPrice;
    }
  }

  //retrieve pack size object corresponding to the selected option
  for (let i =0; i<packInfo.length; i++){
    if (packInfo[i].packSize == element.value){
      packPrice = packInfo[i].packPrice;
    }
  }

  //calculate total price based on glaze selection + quantity
  totalPrice = (basePrice + glazingPrice) * packPrice;

  //update total price according to the change
  document.getElementById("totalprice").innerHTML = ('$' + totalPrice.toFixed(2));

  
}

cart = [];

//Parse the URL parameter and store the current roll type as a variable

// get the query string from the URL (search parameters)
const queryString = window.location.search;
console.log(queryString);

// use the query string to create a URLSearchParams object
const params = new URLSearchParams(queryString);
console.log('params: ' + params);

// access the parameter we want using the "get" method (e.g. stuff after roll=)
const chosenRoll = params.get('roll');

console.log('chosenRoll: ' + chosenRoll);

//variable = chosenRoll (which is storing the current roll type as a variable)



// Use the URL parameter to update page

const rollName = chosenRoll + ' cinnamon roll';
const rollBasePrice = rolls[chosenRoll].basePrice;
const rollImage = './Assets/hw-1-assets/' + rolls[chosenRoll].imageFile;

console.log(rollName);
console.log(rollBasePrice);
console.log(rollImage);

//update roll name
document.querySelector('#pagetitle').innerText = rollName;

//update roll price
document.querySelector('#totalprice').innerText = rollBasePrice;

//update roll image link
document.querySelector('.donut-flavor-static').src = rollImage;

//update base price variable
basePrice = rollBasePrice; 

//Add to cart class
class Roll{
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function addToCart(){
  
}



  // eventlistener (on click)= add to cart
  // add instance to array cart
  // print entire cart array after every time you add items using console.log()
