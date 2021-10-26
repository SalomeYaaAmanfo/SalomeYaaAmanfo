let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let ageOfRunner = 15;
if(ageOfRunner > 18 && registeredEarly){
  raceNumber+=1000;
}
if(ageOfRunner > 18 && registeredEarly){
  console.log(`Dear Runner,The time for your race is 9:30 am and your race number is ${raceNumber}`)
}else if(ageOfRunner > 18 && !registeredEarly){
   console.log(`Dear Runner,The time for your race is 11:00 am and your race number is ${raceNumber}`);
}else if(ageOfRunner < 18){
    console.log(`Dear Runner,The time for your race is 12:30 pm and your race number is ${raceNumber}`);
}else{
  console.log('Dear Runner,Please see registration desk');
}
