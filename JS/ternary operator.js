const age = 21 ;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water;')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;

if (age >= 23){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`);


console.log(`-------------------------------`);
console.log(`--------------------------------`);
console.log(`---------------------------------`);



const bill = 300;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;
console.log(`The bill was ${bill} and the tip was ${tip} and total was ${total}`);


/// old browsers can't use modern javascript and thats why modern JS gets transpiled and polyfilled - converted back into ES5 with the so called "Babel" to ensure browser compatibility for all users 

//// ES5 fully supported in all browsers (down to IE 9 from 2011)

'use strict'; /// - for using strict mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ;D');


/// using strict as finding a bugs that can normally not be found without it 
/// there are some words that are preserved and cannot be used as variables

