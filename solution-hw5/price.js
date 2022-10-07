if (document.URL.includes("productdetail.html")) {  //resource: https://www.w3schools.com/jsrEF/prop_doc_url.asp
  //https://stackoverflow.com/questions/16133491/detect-what-page-you-are-on-javascript


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
  let packSize = 1;
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
    totalPrice = calculatePrice(basePrice, glazingPrice, packPrice)

    //update total price according to the change
    document.getElementById("totalprice").innerHTML = ('$' + totalPrice.toFixed(2));



    cart = [];

  }


  //Parse the URL parameter and store the current roll type as a variable

  // get the query string from the URL 
  const queryString = window.location.search;

  // use the query string to create a URLSearchParams object
  const params = new URLSearchParams(queryString);

  // access the parameter we want using the "get" method (e.g. stuff after roll)
  const chosenRoll = params.get('roll');

  //variable = chosenRoll (which is storing the current roll type as a variable)



  // Use the URL parameter to update page

  const rollName = chosenRoll + ' cinnamon roll';
  const rollBasePrice = rolls[chosenRoll].basePrice;
  const rollImage = './Assets/hw-1-assets/' + rolls[chosenRoll].imageFile;

  //update roll name
  document.querySelector('#pagetitle').innerText = rollName;

  //update roll price
  document.querySelector('#totalprice').innerText = rollBasePrice;

  //update roll image link
  document.querySelector('.donut-flavor-static').src = rollImage;

  //update base price variable
  basePrice = rollBasePrice;

  function addToCart() {

    //Append to empty cart array
    let customRoll = new Roll(chosenRoll, selectGlaze.value, selectPackSize.value, basePrice);
    cart.push(customRoll);

    // console.log(cart);  
  }

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
    this.size = packSize; //need to get pack size based on this number
    this.basePrice = rollPrice;
    // console.log(rollType, rollGlazing, packSize, rollPrice);

    this.calculatedPrice = calculatePrice(this.basePrice, glazePriceMap[this.glazing], packPriceMap[this.size]);

    // console.log(this.calculatedPrice.toFixed(2));
  }
}


function calculatePrice(basePrice, glazingPrice, packPrice) {
  return (basePrice + glazingPrice) * packPrice;
}


if (document.URL.includes("shoppingcart.html")) {

  const cartSet = new Set();

  //function that calculates price and pass it 

  const originalRoll = new Roll('Original', 'Sugar Milk', '1', 2.49);
  const walnutRoll = new Roll('Walnut', 'Vanilla Milk', '12', 3.49);
  const raisinRoll = new Roll('Raisin', 'Sugar Milk', '3', 2.99);
  const appleRoll = new Roll('Apple', 'Keep Original', '3', 3.49);


  cartSet.add(originalRoll);
  cartSet.add(walnutRoll);
  cartSet.add(raisinRoll);
  cartSet.add(appleRoll);


  //Parse the URL parameter and store the current roll type as a variable

  // get the query string from the URL 
  const queryString = window.location.search;

  // use the query string to create a URLSearchParams object
  const params = new URLSearchParams(queryString);

  // access the parameter we want using the "get" method (e.g. stuff after roll)
  const chosenRoll = params.get('roll');

  //variable = chosenRoll (which is storing the current roll type as a variable)


  let totalPrice = 0;

  function fillCart(item) {
    //grab reference to cart item template
    const template = document.querySelector('#cartitems-template');
    // console.log(template);

    //get content inside template and copy it using a clone method
    let clone = template.content.cloneNode(true);

    //get rid of the fragment
    let cartElement = clone.querySelector('.cinnamonbun');
    // console.log(cartElement);

    //grab reference to div that will hold all cart items
    let cartGallery = document.querySelector('.sc-gallery');

    cartElement.querySelector("#sc_Title").innerText = item.type + " Cinnamon Roll";
    cartElement.querySelector("#sc_Glazing").innerText = "Glazing: " + item.glazing;
    cartElement.querySelector("#sc_PackSize").innerText = "Pack Size: " + item.size;
    cartElement.querySelector(".donut-flavor-static").src = './Assets/hw-1-assets/' + item.type + "-cinnamon-roll.jpeg";
    cartElement.querySelector("#sc_individualitemprice").innerText = '$' + (item.calculatedPrice).toFixed(2);


    totalPrice = totalPrice + item.calculatedPrice;
    document.querySelector("#sc_totalprice").innerText = "$ " + totalPrice.toFixed(2);

    //add our newly created elements
    cartGallery.append(cartElement);

    // console.log(item);
    let deleteButton = cartElement.querySelector('#deletebun');
    deleteButton.onclick = (() => {
      console.log(item);
      cartElement.remove();

      let totalPrice = parseFloat(document.querySelector("#sc_totalprice").innerText.slice(2));
      let rollPrice = parseFloat(cartElement.querySelector("#sc_individualitemprice").innerText.slice(1)).toFixed(2);
      let newTotalPrice = totalPrice - rollPrice;

      document.querySelector("#sc_totalprice").innerText = "$ " + newTotalPrice.toFixed(2);
      cartSet.delete(item);
      console.log(cartSet);

    })
  }

  for (item of cartSet) {
    fillCart(item);




  }
}
