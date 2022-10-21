const firstName = 'Igah';
const lastName = 'Abiye';
const country = 'Nigeria';
const city = 'Port Harcourt';
const age = 21;
const isMarried = false;
const year = 2022;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

const number = '10';
console.log(typeof('10') === 10);

const check = parseInt('9.8')
console.log(check === 10);

// javascript statement which provides truthy values
let name = 'Igah';
let myNumber = 3;
let isBoy = true;
// Javascript statement which provides falsy value
let myName;
let empty = [];
let isAge = null;

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

const one = 'python';
const two = 'jargon';

console.log(one.length != two.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'))

let checkOne = 'dragon';
let checkTwo = 'python';
console.log(!(checkOne.includes('on') && checkTwo.includes('on')))

// what is the year today
const today = new Date()
console.log(today.getFullYear());
// what is the month today as a number 
const month = new Date()
console.log(month.getMonth() + 1);
// what is the date today
const todayDate = new Date()
console.log(todayDate.getDate())
// what is the date today as a number?
const date = new Date()
console.log(date.getDay());
// what is the hours now
const hours = new Date()
console.log(hours.getHours());
// what is the minutes now
const minutes = new Date()
console.log(minutes.getMinutes());
// find out the numbers of seconds elapsed from january 1, 1970 to now
const champions = new Date()
console.log(champions.getTime())

// let a = 1
// let b = 2;
// let c = 3;
// let perimeter = a + b + c
// console.log(perimeter)
// EXERCISES: LEVEL 2
// Area of triangle
const base = prompt('Enter base:');
const height = prompt('Enter Height:');
const area = (0.5 * base * height)
console.log(`The area of the triangle is ${area}`)

// Perimeter of triangle
const side1 = +prompt('Enter side a:');
const side2 = +prompt('Enter side b:');
const side3 = +prompt('Enter side C:');
const Perimeter = (side1 + side2 + side3)
console.log(Perimeter)


// Area of rectangle && perimeter of rectangle
const length = +prompt('Enter length:');
const width = +prompt('Enter width:')
const areaOfRectangle = length * width;
const perimeterOfRectangle = 2 * (length + width);
console.log(areaOfRectangle, perimeterOfRectangle);

const radius = prompt('Enter radius:');
const pi = 3.14;
const areaOfCircle = pi * (radius**2);
const CircumferenceOfCircle = 2 * pi * radius; 
console.log(areaOfCircle, CircumferenceOfCircle)

// slope y= 2x -2
const valueX = 5;
const slope = 2*(valueX) - 2
console.log(slope);

// slope = (y2-y1)/(x2-x1)
let y1 = 2;
let x1 = 2;
let x2 = 6;
let y2 = 10;
const slopeM = (y2-y1)/(x2-x1);
console.log(slopeM); 

// compare slope
console.log(slope > slopeM);

const x = -3;
const valueY = (x**2 + 6*(x) + 9)
console.log(valueY); 

// calculate pay per hour
const hour = prompt('Enter hours:');
const ratePerHour = prompt('Enter rate per hour:')
const weeklyEarning = hour * ratePerHour;
console.log(weeklyEarning);

const myNames = 'Abiye'
if(myNames.length > 7){
    console.log('My name is long')
}else{
    console.log('My name is short')
}

let myFirstName = 'Igah';
let myLastName = 'Abiye';
if(myFirstName.length > myLastName){
    console.log(`your first name, ${myFirstName} is longer than your family name, ${myLastName} `)
}else{
    console.log(`your last name, ${myLastName} is longer than your first name, ${myFirstName}`)
}

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you`);

// driving Age
const birthYear = prompt('Enter birth year:');
const time = 2022 - birthYear 
const allowed = 18 - time
if((time) > 18){
    console.log(`You are ${time}. You are old enough to drive`)
}else{
    console.log(`You are ${time}. You will be allowed to drive after ${allowed} years`)
}

// number of years in seconds
const numberOfYears = prompt(`Enter number of years you live:`);
const numberOfYearsInSeconds = 31536000 * numberOfYears;
console.log(`You lived ${numberOfYearsInSeconds} seconds`)

// Readable format of time
console.log(`${today.getFullYear()}-${month.getMonth() + 1}-${todayDate.getDate()} ${hours.getHours()}:${minutes.getMinutes()}`)
console.log(`${todayDate.getDate()}-${month.getMonth() + 1}-${today.getFullYear()} ${hours.getHours()}:${minutes.getMinutes()}`)
console.log(`${todayDate.getDate()}/${month.getMonth() + 1}/${today.getFullYear()} ${hours.getHours()}:${minutes.getMinutes()}`)

// Exercise level 3
console.log(`${today.getFullYear()}-${month.getMonth() + 1}-${todayDate.getDate()} ${hours.getHours()}:${minutes.getMinutes()}`)
