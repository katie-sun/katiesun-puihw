console.log('Start page.');

class Color {
  constructor(idnumber, colorID, hexCode, dayCounter, imageFile, alt) {
    this.idnumber = idnumber;
    this.colorID = colorID;
    this.hexCode = hexCode;
    this.dayCounter = dayCounter;
    this.imageFile = imageFile;
    this.alt = alt;
  }

}
// resource: https://stackoverflow.com/questions/28444457/get-id-of-element-clicked

document.addEventListener('click', function (e) {
  let clickedItem = e.target.id;
  // let removecontainer = document.getElementById("gradient2");
  // let addgradient = document.createElement("img")


  // removecontainer.removeAttribute("id");
  // addgradient.setAttribute("id", "meshgradient");

  // removecontainer.appendChild(addgradient);

  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].colorID == clickedItem) {

      const hexElement = document.querySelector('#hexcode');
      hexElement.innerHTML = cardInfo[i].hexCode;

      const counterElement = document.querySelector('.counternumber');
      counterElement.innerHTML = cardInfo[i].dayCounter;

      const imageElement = document.querySelector('#painting');
      imageElement.src = "Assets/fp4/" + cardInfo[i].imageFile;
      imageElement.alt = cardInfo[i].alt;

      const descriptorElement = document.querySelector('#colordescription');
      descriptorElement.innerHTML = cardInfo[i].colorID;



      // const borderElement = document.querySelector(".colorbox");
      // borderElement.setAttribute("id", "borderbox");
    }
  }
}, false);



function populateHtml() {
  //grab div where we're populating
  console.log('function populate html test');
  let container = document.getElementById("colorgrid");

  //resource: https://www.w3schools.com/jsref/jsref_foreach.asp
  //for each element in the data array cardInfo
  cardInfo.forEach((color) => {
    //create new color card object
    let colorcard = new Color(color.idnumber, color.colorID, color.hexCode, color.dayCounter, color.imageFile, color.alt)

    //populate DOM
    let colorBox = document.createElement("div");
    //add colorbox css styling
    colorBox.classList.add("colorbox");
    //add ID for individual background colors
    colorBox.id = colorcard.colorID;


    container.appendChild(colorBox);

  })
}


// let filtered = cardInfo.filter(function ())


// Using filter method to create a remove method
function arrayRemove(cardInfo, value) {
  let test = cardInfo.filter(function (shade) {
    if (shade.group == value) {
      return true;
    }
  });
  console.log(test);
}


var result = arrayRemove(cardInfo, "blues");


const greencardtest = cardInfo.filter(function (green) {
  // let removecards = [];
  // for (let i = 0; i < cardInfo.length; i++) {
  if (green.group == 'greens') {
    return true;
  }
});

function populateHTMLfilter() {
  let container = document.getElementById("colorgrid");

  test.forEach((color) => {
    let colorcard = new Color(color.idnumber, color.colorID, color.hexCode, color.dayCounter, color.imageFile, color.alt)

    let colorBox = document.createElement("div");
    colorBox.classList.add("colorbox");
    colorBox.id = colorcard.colorID;

    container.appendChild(colorBox);

  })
}


function filter() {
  cardInfo = [];
  populateHTMLfilter();
  console.log(greencardtest);
}
// const greencards = cardInfo.filter(function (green) {
//   // let removecards = [];
//   // for (let i = 0; i < cardInfo.length; i++) {
//   if (green.group == 'greens') {
//     // removecards.push
//     return true;
//   }
// });

// console.log(greencards);





// const greencards = cardInfo.filter(function (green) {
//   let removecards = [];
//   if (green.group != 'greens') {
//     cardInfo.splice
//   }
// });

// console.log(greencards);

// let greensButton = document.querySelector("#plusicon");
// greensButton.onclick = (() => {

// }

// //remove cart elements
// let deleteButton = cartElement.querySelector('#deletebun');
// deleteButton.onclick = (() => {
//   cartElement.remove();

//   let totalPrice = parseFloat(document.querySelector("#sc_totalprice").innerText.slice(2));
//   let rollPrice = parseFloat(cartElement.querySelector("#sc_individualitemprice").innerText.slice(1)).toFixed(2);
//   //change total price each time a cart element is removed
//   let newTotalPrice = totalPrice - rollPrice;

//   document.querySelector("#sc_totalprice").innerText = "$ " + newTotalPrice.toFixed(2);
//   //delete item from cart
//   cartSet.delete(item);

// })



//if green.group === 'greens', then do nothing
//else: remove from array (but how do i allow this to reset in between clicks?)

// const greencards = cardInfo.filter(green => green.group === 'greens');
// console.log(greencards);

//modifying darkmode library
let options = {
  right: '0px',
  bottom: '1100px',
  // top: '480 px',
  left: '25px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}


function addDarkmodeWidget() {
  // new Darkmode().showWidget();

  const darkmode = new Darkmode(options);
  darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);


// import Darkmode from 'darkmode-js';

// new Darkmode().showWidget();




// const testing = document.getElementsByClassName("colorbox");

// const buttonPressed = e => {
//   console.log(e.target.id);  // Get ID of Clicked Element
// }

// for (let buttonf of testing) {
//   buttonf.addEventListener("click", buttonPressed);
// }


// function searchArray(clickedItem) {

//   const test = clickedItem.value;
//   console.log(test);

//   for (let i = 0; i < cardInfo.length; i++) {
//     if (cardInfo[i].colorID == clickedItem.value) {
//       // return cardInfo[i];
//       console.log(cardInfo[i]);
//     }
//   }
// }

// const resulttest = searchArray("darkgreen", cardInfo);
// console.log(resulttest);