//Create another button that, when clicked, clears any text in the input field.
let resetButton = document.getElementById('reset-btn');

const toCelsius = (temp) => {
    return (temp - 32) / 1.8;   
}

const toFahrenheit = (temp) => {
    return temp * 1.8 + 32;
}

console.log(toCelsius(87));
console.log(toFahrenheit(25));


// Get a reference to the button element in the DOM
var button = document.getElementById("convert");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  let radios = document.getElementByTagName('input');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].id === 'celsius' && radios[i].checked) {
        value = radios[i].value;
        toCelsius(value);
    } else if (radios[i].id === 'fahrenheit' && radios[i].checked) {
        value = radios[i].value;
        toFahrenheit(value);
    } else {
        console.log('hi');
    }
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

