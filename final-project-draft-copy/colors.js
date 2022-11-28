console.log('Start page.');

class Color {
  constructor(idnumber, colorID, hexCode, dayCounter, imageFile) {
    this.idnumber = idnumber;
    this.colorID = colorID;
    this.hexCode = hexCode;
    this.dayCounter = dayCounter;
    this.imageFile = imageFile;
  }

}


resource: https://stackoverflow.com/questions/28444457/get-id-of-element-clicked

document.addEventListener('click', function (e) {
  let clickedItem = e.target.id;


  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].colorID == clickedItem) {
      const hexElement = document.querySelector('#hexcode');
      hexElement.innerHTML = cardInfo[i].hexCode;

      const counterElement = document.querySelector('#counternumber');
      counterElement.innerHTML = cardInfo[i].dayCounter;

      const imageElement = document.querySelector('#meshgradient');
      imageElement.src = "Assets/fp4/" + cardInfo[i].imageFile;

      const descriptorElement = document.querySelector('#colordescription');
      descriptorElement.innerHTML = cardInfo[i].colorID;

    }

  }

  console.log(clickedItem);
}, false);


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



// function updateElement() {
//   const imageElement = document.querySelector("#meshgradient");
//   const hexElement = document.querySelector("#hexcode");
//   const counterElement = document.querySelector('#counternumber');

//   // imageElement.src = "Assets/fp4/" + this.imageFile;
//   imageElement.src = "Assets/fp4/black-pantone.jpg";
//   // hexElement.innerText = this.hexCode;
//   hexElement.innerHTML = "#011B10";

//   // counterElement.innerText = this.dayCounter;
//   counterElement.innerHTML = 3;

// }

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