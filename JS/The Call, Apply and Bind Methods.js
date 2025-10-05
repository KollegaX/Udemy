const { add } = require("mathjs");

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book : function() {}
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push(({flight: `${this.iataCode}${flightNum}`}, name));
    }
    
}


lufthansa.book(239,'Carter Jones');
lufthansa.book(635, 'John Smith');


const eurowings = {
    airline : 'Eurowings',
    iataCode : 'EW',
    bookings: [],
}

const book = lufthansa.book;

// does NOT work
// book(23,'Sarah Williams');

/// CALL method
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss,583, 'Mary Cooper')


// --------------------------------------------------------------------------------------

/// Apply Method (is not that used anymore, because there is a better thing to do)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);

/// (here the with the spread operator)
book.call(swiss, ...flightData)


// Bind method
// const book = lufthansa.book; - just to copy and see from where the book.bind comes from
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');


/// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    
    this.planes++
    console.log(this.planes);
    
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane) // it will be NaN, because it points to the handler in this situation the .buy div
// to make it work, we need the Bind Method so :
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


/// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23  - this is what it looks if not bind used
console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
