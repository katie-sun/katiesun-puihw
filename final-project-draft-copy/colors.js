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
      imageElement.classList.remove("opacityhack")
      imageElement.src = "Assets/fp4/" + cardInfo[i].imageFile;
      imageElement.alt = cardInfo[i].alt;

      const descriptorElement = document.querySelector('#colordescription');
      descriptorElement.innerHTML = cardInfo[i].colorID;

      animateCSS('#largecard', 'flipInY');

      // const borderElement = document.querySelector(".colorbox");
      // borderElement.setAttribute("id", "borderbox");
    }
  }
}, false);
// flipElement.classList.remove('animate__animated', 'animate__flipInY');


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
document.getElementById("plusicon").addEventListener('click', reset);

function reset() {
  const imageElement = document.querySelector("#painting");
  imageElement.classList.add("opacityhack");
  animateCSS('#largecard', 'fadeIn');
  imageElement.src = "./Assets/fp4/meshgradient.jpg";

  let container = document.querySelector("#colorgrid");
  container.innerHTML = "";

  populateHtml();
}

// document.getElementsByClassName("darkmode-layer darkmode-layer--button").addEventListener('click', changesrc);

function changesrc() {
  const imageElement = document.querySelector("#plusicon");
  imageElement.src = "./Assets/fp4/resetwhite.png";
}



document.getElementById("greenbutton").addEventListener('click', greenButton);
document.getElementById("bluebutton").addEventListener('click', blueButton);
document.getElementById("redbutton").addEventListener('click', redButton);
document.getElementById("yellowbutton").addEventListener('click', yellowButton);

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


function createSwatch(color) {
  let container = document.querySelector("#colorgrid");

  let colorcard = new Color(color.idnumber, color.colorID, color.hexCode, color.dayCounter, color.imageFile, color.alt)

  //populate DOM
  let colorBox = document.createElement("div");
  //add colorbox css styling
  colorBox.classList.add("colorbox");
  //add ID for individual background colors
  colorBox.id = colorcard.colorID;


  container.appendChild(colorBox);
}


//modifying darkmode library

let options = {
  right: '0px',
  bottom: '1075px',
  // top: '480 px',
  left: '25px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fbfafa', // default: '#fff'
  backgroundColor: '#fbfafa',  // default: '#fff'
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



