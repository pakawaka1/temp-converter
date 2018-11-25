const cel = document.querySelector('h3');
const fah = document.querySelector('h3');

const oldTemp = prompt('What temperature do you wish to convert?');
// console.log(oldTemp);
const temp = parseInt(oldTemp);
console.log(temp);

const scale = prompt(
  'To what scale do you wish to convert your temperature?  Please enter "C" or "F":'
);
console.log(scale);

if (scale === 'C') {
  const newTemp = Math.round((temp - 32) * (5 / 9));
  console.log(newTemp);
  cel.innerHTML = newTemp;
  cel.addEventListener('click', function(event) {
    // console.log(event);
    // console.log(temp);
    // cel.innerHTML = temp;
    if (cel.innerHTML == newTemp) {
      cel.innerHTML = temp;
    } else if (cel.innerHTML == temp) {
      cel.innerHTML = newTemp;
    } else {
      cel.innerHTML = newTemp;
    }
  });
} else {
  const newTemp = Math.round(temp * (9 / 5) + 32);
  console.log(newTemp);
  fah.innerHTML = newTemp;
  fah.addEventListener('click', function(event) {
    // console.log(event);
    // console.log(temp);
    if (fah.innerHTML == newTemp) {
      fah.innerHTML = temp;
    } else if (fah.innerHTML == temp) {
      fah.innerHTML = newTemp;
    } else {
      fah.innerHTML = newTemp;
    }
  });
}
