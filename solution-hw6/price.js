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

if (document.URL.includes("productdetail.html")) {
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
}

// When the page loads, find the Pack Size select element.
let selectPackSize = document.querySelector("#packsizes");

if (document.URL.includes("productdetail.html")) {

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
}

// Set constants + variables
let basePrice = 2.49;
let glazingPrice = 0.00;
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

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll');

// variable = chosenRoll (which is storing the current roll type as a variable)


// Use the URL parameter to update page

if (document.URL.includes("productdetail.html")) {

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

}



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
//function to add new rolls to cart set
function addToCart() {

  let newRoll = createCartRoll(chosenRoll, selectGlaze.value, selectPackSize.value, basePrice);
  // fillCart(newRoll);
  cartSet.add(newRoll);
  console.log(cartSet);
  saveToLocalStorage();
}

//function to retrieve from local storage + populate cart set
function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem('storedRolls');
  if (rollArrayString) {
    const rollArray = JSON.parse(rollArrayString);
    cartSet = new Set(Array.from(rollArray));
  }

}
//log cart after each
console.log(cartSet);

//function to save to local storage as a string
function saveToLocalStorage() {
  const rollArray = Array.from(cartSet);
  //convert array to string
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

let totalPrice = 0;

if (document.URL.includes("shoppingcart.html")) {
  //function to populate cart with items based on template
  function fillCart(item) {
    //grab reference to cart item template
    const template = document.querySelector('#cartitems-template');

    //get content inside template and copy it using a clone method
    let clone = template.content.cloneNode(true);

    //get rid of the fragment
    let cartElement = clone.querySelector('.cinnamonbun');

    //grab reference to div that will hold all cart items
    let cartGallery = document.querySelector('.sc-gallery');

    //Appends appropriate DOM elements to shopping cart page
    cartElement.querySelector("#sc_Title").innerText = item.type + " Cinnamon Roll";
    cartElement.querySelector("#sc_Glazing").innerText = "Glazing: " + item.glazing;
    cartElement.querySelector("#sc_PackSize").innerText = "Pack Size: " + item.size;
    cartElement.querySelector(".donut-flavor-static").src = './Assets/hw-1-assets/' + item.type.toLowerCase() + "-cinnamon-roll.jpeg";
    cartElement.querySelector("#sc_individualitemprice").innerText = '$' + (item.calculatedPrice).toFixed(2);

    //calculate total price of cart (within the loop)
    totalPrice = totalPrice + item.calculatedPrice;
    document.querySelector("#sc_totalprice").innerText = "$ " + totalPrice.toFixed(2);

    //add our newly created elements
    cartGallery.append(cartElement);


    //remove cart elements
    let deleteButton = cartElement.querySelector('#deletebun');
    deleteButton.onclick = (() => {
      cartElement.remove();

      let totalPrice = parseFloat(document.querySelector("#sc_totalprice").innerText.slice(2));
      let rollPrice = parseFloat(cartElement.querySelector("#sc_individualitemprice").innerText.slice(1)).toFixed(2);
      //change total price each time a cart element is removed
      let newTotalPrice = totalPrice - rollPrice;

      document.querySelector("#sc_totalprice").innerText = "$ " + newTotalPrice.toFixed(2);
      //delete item from cart
      cartSet.delete(item);

      //update local storage when each item is removed + log in console
      saveToLocalStorage();
      console.log(cartSet);

    })
  }
  for (item of cartSet) {
    fillCart(item);

  }

}

