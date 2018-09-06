//Create another button that, when clicked, clears any text in the input field.
let resetButton = document.getElementById('reset');

const toCelsius = (temp) => {
    return (temp - 32) / 1.8;   
}

const toFahrenheit = (temp) => {
    return temp * 1.8 + 32;
}

const convertInputTemp = (temp, scale) => {
    return scale === "F" ? toFahrenheit(temp).toFixed(0) : toCelsius(temp).toFixed(0);
}

const getConvertInputTempToScale = () => {
    return document.querySelector("input[name='conversion-radio']:checked").value;
}

const getTemp = () => {
    return document.getElementById('temp-input').value;
}

const printToDom = (stringToPrint, divId) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
 };

 const resultStringBuilder = (temp, color) => {
    let newId = `<h2 id="${color}">`;
    let newString = newId + temp + `</h2>`;
    newId.innerHTML = newString;
    printToDom(newString, 'result');
 }

 const getColor = (temp, scale) => {
     if ((scale === "C" && temp > 32) || (scale ==="F" && temp > 90)) {
         return "red";
     } else if ((scale === "C" && temp < 0) || (scale === "F" && temp < 32)) {
         return "blue";
     } else {
         return "green";
     }
 }

// Get a reference to the button element in the DOM
var button = document.getElementById("submit-btn");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
    let temp = getTemp();
    let scale = getConvertInputTempToScale();
    let convertedTemp = convertInputTemp(temp, scale);
    let color = getColor(convertedTemp, scale);
    resultStringBuilder(convertedTemp, color);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

