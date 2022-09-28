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
const basePrice = 2.49;
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


//Updating productdetail page with roll data

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;
console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
console.log('params: ' + params);

// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get('roll');

console.log('chosenRoll: ' + chosenRoll);

/* ------------------------------------------------------------------------- */

// Use the URL parameter to update our page.

// Update the header text
let headerElement = document.querySelector('#pagetitle');
headerElement.innerText = chosenRoll + ' cinnamon roll'

// Update the image
let rollImage = document.querySelector('.donut-flavor-static');
rollImage.src = './Assets/hw-1-assets/' + chosenRoll + '-cinnamon-roll.jpeg';