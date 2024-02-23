// Remember, we're gonna use strict mode in all scripts now!'
'use strict';

// const x = '23';

//PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures0 = [5, 8, -6, 'errors', -4, 1, -1, 7, 9, -5];
// const tempconcat = temperatures.concat(temperatures0);
// console.log(tempconcat);
//1 .- Understanding the problem
//what is temp amplitude? Answer: difference between highest and lowest temp
//- How to compute max and min temperatures?
//What's a sensor error? and what to do? Answer: ignore the error.

// 2.- Breaking up into sub-problems
//-How to ignore errors?
//- Find max value in temp array
//-Find min value in temp array
//-Substract min from max(amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp === 'string') console.log('error');
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max + min;
// };
// const amplitude = calcTempAmplitude(tempconcat);
// console.log(amplitude);
//max = 3

//Problem 2:
//Function should now receive 2 arrays of temps
// 1.-Understanding the problem
// - With 2 arays, shjould we implement functionality twice? NO just merge two arrays

// 2.- Breaking up into sub-problems
//- Merge 2 arrays?
// const calcAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp === 'string') console.log('error');
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max + min;
// };
// const amplitudeNew = calcAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   {
//     const measurement = {
//       type: 'temp',
//       unit: 'celsius',
//       //C) FIX THE ERROR
//       // value: Number(prompt('Degrees celcius:')),
//       value: 10,
//     };
//     console.log(measurement.value);
//     //B) FIND THE ERROR
//     console.table(measurement);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
//   }
// };
//A) Identify the bug
// console.log(measureKelvin());

// //Using a debugger
// const calcAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     // debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const AmplitudeBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(AmplitudeBug);

////////////////////////////////////
// CODING CHALLENGE #1
/*
Given an array of forecasted maxium temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17°C in 1 days... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' wich takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA1:[17,21,23]
TEST DATA2:[12,5,-5,0,4]
*/

const printForecast = function (arr1) {
  let str = '';
  for (let i = 0; i < arr1.length; i++) {
    str += `${arr1[i]}°C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

const DATA1 = [17, 21, 23];
const DATA2 = [12, 5, -5, 0, 4];

console.log(printForecast(DATA1), printForecast(DATA2));

//1) Understanding the problem
//- Array transformed to string, separated by ...
//- What is the X days? Answer: index + 1

//2) Breaking up into sub-problems
//- Transform array into string
//-Transform each element to string with °C
//- Strings need to contain day (index +1)
// - Add ... between elements and start and  end of string
