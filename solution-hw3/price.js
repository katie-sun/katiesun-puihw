//variables to store what the last selection is?

//set up arrays

//glazes and prices array
let glazesnPrices = [
  {glazingOptions:"Keep Original", glazingPrice: 0.00},
  {glazingOptions:"Sugar Milk", glazingPrice: 0.00},
  {glazingOptions:"Vanilla Milk", glazingPrice: 0.50},
  {glazingOptions:"Double Chocolate", glazingPrice: 1.50}
]

//pack sizes and prices array
let packSizes = [
  {packSize:"1", packPrice: 1},
  {packSize:"3", packPrice: 3},
  {packSize:"6", packPrice: 5},
  {packSize:"12", packPrice: 10},
]

//update option using for loop w/.js

// When the page loads, find the Glaze select element.
let selectglaze = document.querySelector("#glazes");
for (let i = 0; i < glazesnPrices.length; i++){
  // create HTML element
  var option = document.createElement('option');
  // access value in array
  option.value = glazesnPrices[i].glazingOptions;
  // update blank HTML w/type of glaze 
  option.innerHTML = glazesnPrices[i].glazingOptions;
  // append to HTML element
  selectglaze.appendChild(option);
}


// When the page loads, find the Pack Size select element.
let selectpacksize = document.querySelector("#packsizes");
for (let i = 0; i < packSizes.length; i++){
  // create HTML element
  const option = document.createElement('option');
  // access value at array 
  option.value = packSizes[i].packSize;
  // update blank HTML w/pack size
  option.innerHTML = packSizes[i].packSize;
  // append to pack size dropdown
  selectpacksize.appendChild(option);
}

// Set constants + variables
const basePrice = 2.49;
let glazingPrice = 0.00;
let packSize = 1;
let packPrice = 1;

function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;
  console.log('currently selected item:' + priceChange);

  //retrieve glaze object corresponding to the selected option
  for (let i =0; i<glazesnPrices.length; i++){
    if (glazesnPrices[i].glazingOptions == element.value){
      console.log('the type of glaze:');
      console.log(glazesnPrices[i].glazingOptions);
      glazingPrice = glazesnPrices[i].glazingPrice;
      console.log('the price adaption:');
      console.log(glazingPrice);
    }
  }

  //retrieve pack size object corresponding to the selected option
  for (let i =0; i<packSizes.length; i++){
    if (packSizes[i].packSize == element.value){
      console.log('pack size:' + packSizes[i].packSize);
      packPrice = packSizes[i].packPrice;
      console.log('multiply by:' + packPrice);
    }
  }

  //when will it run? move it into the function  
  totalPrice = (basePrice + glazingPrice) * packPrice;
  console.log(totalPrice.toFixed(2));

  //update total price according to the change
  // document.getElementById("changefont").innerHTML = ("$" + totalPrice);
  document.getElementById("totalprice").innerHTML = ('$' + totalPrice.toFixed(2));

  
}
