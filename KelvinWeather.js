//kelvin is today's forecast.Its a constant and its value is 293 in kelvin.
const kelvin = 293;
//celcius is 273 less than kelvin.therefore code is converting celsius to kelvin
let celsius = kelvin - 273;
//converting celsius to fahrenheit 
let fahrenheit = celsius*(9/5)+32;
//rounding down fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`temperature is ${newton} newton`)