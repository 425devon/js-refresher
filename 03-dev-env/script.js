// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcTempAmp(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let amplitude;
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 'error') continue;
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return max - min;
}

console.log(calcTempAmp(temperatures1, temperatures2));
*/

const temps = [17, 21, 23];

function printForecast(arr) {
  let msg = '';
  for (let i = 0; i < arr.length; i++) {
    msg += `... ${arr[i]}°C in ${i + 1} days `;
  }
  console.log(msg);
}

printForecast(temps);
