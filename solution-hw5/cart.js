

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

// Set constants + variables
let basePrice = 2.49;
let glazingPrice = 0.00;
let packSize = 1;
let packPrice = 1;

//function to trigger price update based on user selections in the drop down
function calculatedPrice(element) {

  //calculate total price based on glaze selection + quantity
  totalPrice = (basePrice + glazingPrice) * packPrice;

  //update total price according to the change
  document.getElementById("totalprice").innerHTML = ('$' + totalPrice.toFixed(2));

}



function addToCartSet(chosenRoll, rollGlazing, packSize, basePrice){
  const newbun = new Roll(chosenRoll, rollGlazing, packSize, basePrice);
  cartSet.add(newbun);
  return newbun;
}

