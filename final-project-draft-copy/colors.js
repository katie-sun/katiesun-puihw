console.log('Start page.');

//dark mode widget (darkmode.js)
function addDarkmodeWidget() {
  new Darkmode().showWidget();

  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();

}
window.addEventListener('load', addDarkmodeWidget);

//modify dark mode defaults
const options = {
  time: '0.5s', // default: '0.3s'
  label: '🌓', // default: ''
  left: '0px',
  bottom: '800px',
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

//to create Color objects
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

//from animate.css documentation 
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });




document.addEventListener('click', function (e) {
  //get ID of element clicked
  // resource: https://stackoverflow.com/questions/28444457/get-id-of-element-clicked
  let clickedItem = e.target.id;

  //update hex code, painting, counter number, and color description on click of corresponding swatch
  for (let i = 0; i < cardInfo.length; i++) {
    if (cardInfo[i].colorID == clickedItem) {

      const hexElement = document.querySelector('#hexcode');
      hexElement.innerHTML = cardInfo[i].hexCode;

      const counterElement = document.querySelector('.counternumber');
      animateCSS('.counternumber', 'flipInX');
      counterElement.innerHTML = cardInfo[i].dayCounter;

      const imageElement = document.querySelector('#painting');
      imageElement.src = "Assets/fp4/" + cardInfo[i].imageFile;
      imageElement.classList.remove("opacityhack")
      imageElement.alt = cardInfo[i].alt;

      const descriptorElement = document.querySelector('#colordescription');
      descriptorElement.innerHTML = cardInfo[i].colorID;

      animateCSS('#largecard', 'flipInY');

    }
  }
}, false);


//function to create color swatch cards
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


//reset button
document.getElementById("resetbutton").addEventListener('click', reset);

function reset() {

  const imageElement = document.querySelector("#painting");
  imageElement.classList.add("opacityhack");
  animateCSS('#largecard', 'fadeIn');
  imageElement.src = "./Assets/fp4/meshgradient.jpg";

  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";
  container.style.justifyContent = "space-between";

  const hexElement = document.querySelector('#hexcode');
  hexElement.innerHTML = "20 Colors"

  const counterElement = document.querySelector('.counternumber');
  animateCSS('.counternumber', 'flipInX');
  counterElement.innerHTML = "20"

  const descriptorElement = document.querySelector('#colordescription');
  descriptorElement.innerHTML = "20 Days"

  populateHtml();
}



//color filter button
let filterbtn = document.getElementById("filterbutton");
let targetDiv = document.getElementById("colorbuttons");

filterbtn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "flex";
    animateCSS('#greenbutton', 'bounceIn');
    animateCSS('#bluebutton', 'bounceIn');
    animateCSS('#redbutton', 'bounceIn');
    animateCSS('#yellowbutton', 'bounceIn');
  }
};



//filter by color family 
document.getElementById("greenbutton").addEventListener('click', greenButton);
document.getElementById("bluebutton").addEventListener('click', blueButton);
document.getElementById("redbutton").addEventListener('click', redButton);
document.getElementById("yellowbutton").addEventListener('click', yellowButton);

//filter by greens
function greenButton() {
  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";

  let greenswatches = cardInfo.filter(function (greens) {
    if (greens.group == "greens") {
      return true;
    }
  });

  greenswatches.forEach((color) => {
    createSwatch(color);
  });
}

//filter by blues
function blueButton() {
  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";

  let blueswatches = cardInfo.filter(function (blues) {
    if (blues.group == "blues") {
      return true;
    }
  });

  blueswatches.forEach((color) => {
    createSwatch(color);
  });
}

//filter by reds
function redButton() {
  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";

  let redswatches = cardInfo.filter(function (reds) {
    if (reds.group == "reds") {
      return true;
    }
  });

  redswatches.forEach((color) => {
    createSwatch(color);
  });
}

//filter by yellows
function yellowButton() {
  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";

  let yellowswatches = cardInfo.filter(function (yellows) {
    if (yellows.group == "yellows") {
      return true;
    }
  });

  yellowswatches.forEach((color) => {
    createSwatch(color);
  });
}


//create color swatches for filter by color family function
function createSwatch(color) {
  let container = document.querySelector("#colorgrid");
  container.style.justifyContent = "flex-start";

  let colorcard = new Color(color.idnumber, color.colorID, color.hexCode, color.dayCounter, color.imageFile, color.alt)

  //populate DOM
  let colorBox = document.createElement("div");
  //add colorbox css styling
  colorBox.classList.add("colorbox");
  //add ID for individual background colors
  colorBox.id = colorcard.colorID;


  container.appendChild(colorBox);
}

