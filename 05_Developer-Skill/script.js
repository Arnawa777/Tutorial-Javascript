'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    //C FIX
    value: Number(prompt('Degrees Celcius')),
  };

  // B FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A Identify
// console.log(measureKelvin());

//challenge
const number = [17, 23, 25];
const number2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('... ' + forecast);
};

// console.log(printForecast(number));
printForecast(number2);
