
/// slice is never included its like length - 1;
/// new String('jonas') - is object

/// slice
/// toLowerCase
/// toUpperCase
/// trim
/// replace
/// replaceAll
/// includes
/// startsWith
/// endsWith
/// split
/// join
/// padStart
/// padEnd
/// repeat
/// concat
/// reverse

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);


console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7)); /// slice is never included its like length - 1;


console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    //B and E are middle seats
    let s = seat.slice(-1);

    if (s === 'B' || s === 'E'){
        console.log('middle Seat');
    } else {
        console.log('Somewhere else');
        
    }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')


function solve(passengerName) {
    passengerName = passengerName.toLowerCase();
    let correctName = passengerName[0].toUpperCase() + passengerName.slice(1)
    console.log(correctName);
    
}
solve('JoNAS Kim') /// just the first letter of the name is with upperCased, 


function upperCaseBoth(passengerName){
    passengerName = passengerName.split(' ');
    let firstName = passengerName[0][0].toUpperCase() + passengerName[0].slice(1).toLowerCase()
    let lastName = passengerName[1][0].toUpperCase() + passengerName[1].slice(1).toLowerCase()

    console.log(firstName, lastName);
    

}
upperCaseBoth('NiKLAS PUshkIN')



const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail || 0);

// replacing
const priceGB = '288,97$'
const priceBG = priceGB.replace('$','lv').replace(',','.')
console.log(priceBG);

const announcement = 'All passengers come to barding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door','gate'));

/// Regular Expression - REGEX
console.log(announcement.replace(/door/g,'gate'));

/// Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('A3'));

if (plane1.startsWith('A3') && plane1.endsWith('neo')){
    console.log('Part of the NEW A3 family');
}


/// Practice exercise 
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard!');
        
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')


/// Split and Join
console.log(typeof('a+very+nice+string'.split('+')));
const [firstName,lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
 const names = name.split(' ');
 const namesUpper = [];
 console.log(names);
 
    for (const n of names){
        // namesUpper.push(n[0].toUpperCase() + n.slice(1)) // OR
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
    console.log(namesUpper);
}
capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtmann')


/// Padding a String - until the length of 25 is achieved for example
const message = 'Go to gate 23!';
console.log(message.padEnd(25, '+'));
console.log('Jonas'.padStart(25, '+'));


/// Masking
const maskedCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
        return last.padStart(str.length, '*')
    
}
console.log(maskedCreditCard('23434656'));
console.log(maskedCreditCard(8238783427328));
console.log(maskedCreditCard('2713892174712445'));


/// Repeat
const message2 = 'Bad weather... All Departures Delayed...'
console.log(message2.repeat(5));


const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
    
}
planesInLine(5)
planesInLine(3)
planesInLine(12)
