
let colorInfo = {
  'Black': '#011B10',
  'Dark Green': '#133A1B',
  'Mid Green': '#819F5A',
  'Sage Green': '#B7BF96',
  'Yellow Green': '#E4DEAE',
  'Dark Blue': '#03045E',
  'Cerulean': '#0077B6',
}

console.log('Started application.');

const color = {
  hexCode: '#011B10',
  day: 3,
  imageFile: "Assets/fp4/black-pantone.jpg",
}


class Color {
  constructor(imageURL, hexCode, dayCounter) {
    this.imageFile = imageURL;
    this.hexCode = hexCode;
    this.day = dayCounter;
  }

  updateElement() {
    console.log('Updating Element!');
  }
}

const colorOne = new Color(
  '#011B10',
  3,
  "Assets/fp4/black-pantone.jpg",
)


const colorTwo = new Color(
  '#133A1B',
  6,
  "Assets/fp4/black-pantone.jpg",
)

//need to make this more universal
//so it's pulling the 'fill in' information from a dictionary or array
function changeColor() {
  document.getElementById("meshgradient").style.background = "011B10";
  document.getElementById("hexcode").innerHTML = "011B10";
  document.getElementById("counternumber").innerHTML = "15";
}

function updateElement() {
  console.log('Running the updateElement function!')

  const imageElement = document.querySelector("#meshgradient");
  const hexElement = document.querySelector("#hexcode");
  const counterElement = document.querySelector("#counternumber");

  imageElement.src = color.imageFile;
  hexElement.innerHTML = color.hexCode;
  counterElement.innerHTML = color.day;

}

const colorSet = new Set();


let colorBox = document.querySelector("colorgrid");
let newElement = document.createElement('div');
newElement.classList.add('colorbox');
colorBox.appendChild(newElement);


//Parse the URL parameter and store the current color type as a variable

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('color');

// variable = chosenRoll (which is storing the current roll type as a variable)


// Use the URL parameter to update page

const imageElement = document.querySelector("#meshgradient");
const hexElement = document.querySelector("#hexcode");
const counterElement = document.querySelector("#counternumber");

imageElement.src = color.imageFile;
hexElement.innerHTML = color.hexCode;
counterElement.innerHTML = color.day;




// console.log(newElement);



// for (let i = 0; i < colorInfo.length; i++) {
//   // create HTML element
//   const option = document.createElement('option');
//   // access value in array
//   option.value = colorInfo[i];
//   // update blank HTML w/type of glaze 
//   option.innerHTML = colorInfo[i];
//   // append to HTML element
//   colorBox.appendChild(option);
// }


// const colorBox = document.createElement("p");
// const node = document.createTextNode("test");
// colorBox.appendChild(node);

// const element = document.getElementById("colorgrid");
// element.appendChild(colorBox);


//the 'new' keyword
//creates a new empty object {}
//sets the value of 'this' [the new object that new created] to be the new empty project
// calls the constructor method to make the object + add properties to object




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



//populate DOM w/objects 


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


const pantoneImage = '.Assets/fp4/' + cardInfo[color].imageFile;


const colors = {
  'Black': '#011B10',
  'Dark Green': '#133A1B',
  'Mid Green': '#819F5A',
  'Sage Green': '#B7BF96',
  'Yellow Green': '#E4DEAE',
  'Dark Blue': '#03045E',
  'Cerulean': '#0077B6',
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
}
