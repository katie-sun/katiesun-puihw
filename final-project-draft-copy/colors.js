console.log('Start page.');

class Color {
  constructor(idnumber, colorID, hexCode, dayCounter, imageFile) {
    this.idnumber = idnumber;
    this.colorID = colorID;
    this.hexCode = hexCode;
    this.dayCounter = dayCounter;
    this.imageFile = imageFile;

    // this.updateElement = updateElement(this.hexCode, this.dayCounter, this.imageFile)
  }

  // updateElement() {
  //   console.log('Updating Element!');
  // }
}


// const pantoneImage = '.Assets/fp4/' + cardInfo[color].imageFile;


/*
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
    this.type = rollType;
    this.glazing = rollGlazing; // this is a string-- need to get the price adaptation based on the string to calculate total price
    this.size = packSize; //need to get pack size adjustment based on pack size
    this.basePrice = rollPrice;

    this.calculatedPrice = calculatePrice(this.basePrice, glazePriceMap[this.glazing], packPriceMap[this.size]);
  }
}

*/

function updateElement() {
  const imageElement = document.querySelector("#meshgradient");
  const hexElement = document.querySelector("#hexcode");
  const counterElement = document.querySelector('#counternumber');

  // imageElement.src = "Assets/fp4/" + this.imageFile;
  imageElement.src = "Assets/fp4/black-pantone.jpg";
  // hexElement.innerText = this.hexCode;
  hexElement.innerHTML = "#011B10";

  // counterElement.innerText = this.dayCounter;
  counterElement.innerHTML = 3;

}

//for each element if Object.keys(cardInfo[1]) = the ID, then run using Object.values

// let selectGlaze = document.querySelector("#glazes");

// for (let i = 0; i < glazeInfo.length; i++) {
//   // create HTML element
//   const option = document.createElement('option');
//   // access value in array
//   option.value = glazeInfo[i].glazingOptions;
//   // update blank HTML w/type of glaze 
//   option.innerHTML = glazeInfo[i].glazingOptions;
//   // append to HTML element
//   selectGlaze.appendChild(option);
// }

resource: https://stackoverflow.com/questions/28444457/get-id-of-element-clicked
document.addEventListener('click', function (e) {
  let clickedItem = e.target.id;
  const testing = document.querySelector('#hexcode');
  testing.innerHTML = clickedItem;

  console.log(clickedItem);
}, false);



// const testing = document.getElementsByClassName("colorbox");

// const buttonPressed = e => {
//   console.log(e.target.id);  // Get ID of Clicked Element
// }

// for (let buttonf of testing) {
//   buttonf.addEventListener("click", buttonPressed);
// }


function searchArray(clickedItem) {

  const test = clickedItem.value;
  console.log(test);

  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].colorID == clickedItem.value) {
      // return cardInfo[i];
      console.log(cardInfo[i]);
    }
  }
}

// const resulttest = searchArray("darkgreen", cardInfo);
// console.log(resulttest);


function populateHtml() {
  //grab div where we're populating
  console.log('function populate html test');
  let container = document.getElementById("colorgrid");

  //resource: https://www.w3schools.com/jsref/jsref_foreach.asp
  //for each element in the data array cardInfo
  cardInfo.forEach((color) => {
    //create new color card object
    let colorcard = new Color(color.idnumber, color.colorID, color.hexCode, color.dayCounter, color.imageFile)

    //populate DOM
    let colorBox = document.createElement("div");
    console.log(colorBox);
    //add colorbox css styling
    colorBox.classList.add("colorbox");
    //add ID for individual background colors
    colorBox.id = colorcard.colorID;
    colorBox.setAttribute('onclick', 'updateElement()')

    // let hexlabel = document.createElement("div")
    // hexlabel.textContent = colorcard.hexCode;
    // colorBox.appendChild(hexlabel);

    container.appendChild(colorBox);

  })
}

// $(function () {
//   console.log("dom finished loading");


//   $("#colorbox").on('click', function () {
//     console.log("colorbox clicked");

//     var id = $(this).attr('id');
//     alert(cardInfo[id].hexCode);

//   });
// });

// function updateElement(hexCode, dayCounter, imageFile) {
//   console.log('Running the updateElement function!')

//   const chosenCard = ".'";
//   const imageElement = document.querySelector("#meshgradient");
//   const hexElement = document.querySelector("#hexcode");
//   const counterElement = document.querySelector("#counternumber");

//   hexElement.innerHTML = hexCode;
//   counterElement.innerHTML = dayCounter;
//   // imageElement.src = "Assets/fp4/" + imageFile;

// }





function changeColor() {
  document.getElementById("meshgradient").style.background = "011B10";
  document.getElementById("hexcode").innerHTML = "011B10";
  document.getElementById("counternumber").innerHTML = "15";
}



// const colorSet = new Set();


// let colorBox = document.querySelector("colorgrid");
// let newElement = document.createElement('div');
// newElement.classList.add('colorbox');
// colorBox.appendChild(newElement);


//Parse the URL parameter and store the current color type as a variable


// variable = chosenRoll (which is storing the current roll type as a variable)


// Use the URL parameter to update page

// const imageElement = document.querySelector("#meshgradient");
// const hexElement = document.querySelector("#hexcode");
// const counterElement = document.querySelector("#counternumber");

// imageElement.src = color.imageFile;
// hexElement.innerHTML = color.hexCode;
// counterElement.innerHTML = color.day;




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
