const h3 = document.querySelector('#newTemp');
const oldTemp = prompt('What temperature do you wish to convert?');
// console.log(oldTemp);
const temp = parseInt(oldTemp);
// console.log(temp);

const scale = prompt(
  'To what scale do you wish to convert your temperature?  Please enter "C" or "F":'
);
//console.log(scale);

if (scale === 'C') {
  let newTemp = Math.round(temp * (5 / 9) - 32);

  h3.innerHTML = newTemp;
  // console.log(newTemp);
} else {
  let newTemp = Math.round(temp * (9 / 5) + 32);

  h3.innerHTML = newTemp;
  // console.log(newTemp);
}

// document.addEventListener('click', event => {
//   console.log(event);

//   if (scale === 'C') {
//     let newTemp = temp - 32 * (5 / 9);
//     console.log(newTemp);
//     h3.t
//   } else {
//     let newTemp = (temp * 9) / 5 + 32;
//     console.log(newTemp);
//   }
//   document.getElementById('newTemp').innerHTML = newTemp;
// }

// ///Here is to
// // Display the temperature in an h3 with minimal styling.
// From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// Display the converted temperature in the h3 each time it is changed.g
