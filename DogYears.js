var myAge = 26;// setting variable myAge to my age
let earlyYears = 2;// setting earlyYears to a value of 2.variable will change
earlyYears *= 10.5;
let laterYears = myAge - 2;//calculating later years by reducing myAge by 2.value of laterYears will be changed later on
laterYears *= 4;//calculating number of dog years accounted for by my later years
console.log(earlyYears);
console.log(laterYears);
var myAgeInDogYears =  earlyYears + laterYears;//calculating my age in dog years by adding earlyYears to laterYears
var myName = 'Salome'.toLowerCase();//writing my name to lower case and storing in the variable my name
console.log(`My name is ${myName}. I am ${myAge} years old in human age which is ${myAgeInDogYears} years old in dog years.`);// using string interpolation to print my age in human years as well as dog years