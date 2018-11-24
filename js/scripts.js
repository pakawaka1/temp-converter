

// // Day 6 Take Home

// input.value = 56;


//Ask your user to give you a scale (Celcius or Fahrenheit)


// const myTemp = prompt("What is your temperature?");

const temp = document.querySelector('#myTemp');

console.log(temp);




//and the temperature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius




// const myScale = prompt("To what scale do you wish to convert your temperature? Please select F or C");
// alert(myScale);


const scale = document.querySelector('#myScale')
console.log(scale);



//Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.

function myConvert(temp, scale) {
  if (scale === 'C') {
    let convert = (temp * (9 / 5)) + 32
    console.log(convert);
  } else {
    let convert = (temp - 32) * (5 / 9);
    console.log(convert);
  }
  document.getElementById("newTemp").innerHTML = convert;
}


///Here is to 
// Display the temperature in an h3 with minimal styling.
// From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// Display the converted temperature in the h3 each time it is changed.g