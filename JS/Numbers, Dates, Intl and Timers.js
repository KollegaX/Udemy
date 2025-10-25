// Numbers, Dates, Intl and Timers 


// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log((0.1 + 0.2).toFixed(1));


// Error in JS
console.log(0.1 + 0.2 === 0.3);

console.log(Number('23'));
console.log(+'23');  // plus sign makes it cleaner instead of Number('23')

// Parsing
console.log(Number.parseInt('30px')); // in order to work it need to start with a number
console.log(Number.parseInt('e23'));

console.log(Number.parseInt('   2.5rem'));
console.log(parseFloat('2.5rem   '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if a value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


// Math and Rounding
console.log(Math.sqrt(25)); // or
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5,18,23,11,2));
console.log(Math.max(5,18,'23',11,2));
console.log(Math.max(5,18,'23px',11,2)); // (NaN)

console.log(Math.min(5,18,23,11,2));
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);


/// ...
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;;
// console.log(randomInt(10,20));


// Rounding integers 
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));


// Rounding decimals
console.log((2.7).toFixed(0)); // toFixed returns String
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));


// Project Bankist Loan rounding
// const amount = Math.floor(inputLoanAmount.value);


// 183. Reminder Operator
console.log(5 % 2);
console.log(5 / 2);
console.log(8 % 3); // 8 = 2 * 3 + 2

const isEven = n => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(514));

// labelBalance.addEventListener('click',function (){
//     // document.querySelectorAll('.movements__row');
//     [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered' // 0, 2, 4, 6
//     if (i % 3 === 0) row.style.backgroundColor = 'blue' // 0, 3, 6, 9
// })
// })


/// 184. Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee = 15_00;
const transferFee2 = 1_500;
console.log(transferFee);

const PI = 3.1415;
// if u get a Number from a String/API u should not use the Underscore/Numeric seperator


// 185. Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 5);

// new primitive was added BIGINT
console.log(49021408887879127498214892179831232187319827489124721462189462174621n);
console.log(BigInt(84718947218974612894621874621894612783621876321087));

// Operations
console.log(10000n + 10000n);
console.log(32817409127984127884907129804217897412798421798412n + 421904812904782109471290n);
// U can't mix bigints with regular numbers

const huge = 21392184902178409218940n
const num = 23
// console.log(huge * num); // to do it u need to BigInt the other number :
console.log(huge * BigInt(num));


//// Math.sqrt(16n) (wouldn't work)

console.log(20n > 15); // true
console.log(20n === 20); // false (different primitive type)
console.log(20n == 20); // true;
console.log(20n == '20'); // true;
console.log(typeof 20n);
console.log(typeof 20);


/// Divisions
console.log(12n / 3n)
console.log(10 / 3);


/// 186. Creating Dates
// const now = new Date();
// console.log(now);


/// Working with dates
const future = new Date(2037, 10, 19,15,23);
console.log(future);
console.log(future.getFullYear()); //getYear don't use it, use getFullYear
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());


console.log(future.getTime());
console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);



/// 187. Dates
const now = new Date();

console.log(`${now.getDate()}`);

const hours = now.getHours();
now.setMinutes(5); // Set minutes to 5
const minutes = String(now.getMinutes()).padStart(2, 0);
console.log(`${hours} : ${minutes}`);



/// 189. Operations with Dates
const future1 = new Date(2037,10,19,15,23);
console.log(+future1);

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(new Date(2037,3,14), new Date(2037,3,24))
console.log(days1);


/// 190. Internationalizing Dates (Intl)
const now2 = new Date();
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long', // or month: '2-digit'
    year : 'numeric',
    weekday : 'long'
}
const intl = new Intl.DateTimeFormat('de-DE',options).format(now2);
console.log(navigator.language); // for the people that use the browser in diff lang
console.log(intl);



/// 191. Internationalizing Numbers (Intl)
const nu1m = 3884764.23;
const options1 = {
    style : "currency",
    unit: 'celsius',
    currency: 'EUR',
    // useGrouping: false,
}

console.log('US: ', new Intl.NumberFormat('en-US', options1).format(nu1m));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options1).format(nu1m));
console.log('Bulgaria: ', new Intl.NumberFormat('bg-bg', options1).format(nu1m));
console.log('Browser: ', new Intl.NumberFormat(navigator.language).format(nu1m));

//// for example in a project :
//// const formattedMov = new Intl.NumberFormat(account.locale, {
////     style: 'currency',
////     currency: 'USD'
//// }).format(x);

// currency is completely undependent from the user locale

const formatCur = function(value, locale, currency){
    return new Intl.NumberFormat(locale, {
        style : 'currency',
        currency: currency,
    }).format(value)
};



/// 192. Timers : setTimeout and setInterval
// setTimeout() // receives callback function
const ingredients = ['olives','spinach']
const pizzaTimer = setTimeout((ing1,ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);
console.log('Waiting...');

// you can cancel the timeout by :
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// SetTimeout
// setInterval(function(){
//     const now = new Date();
//     console.log(now.toString().split(' ')[4]);
// }, 1000)




/// 193. Implementing a Countdown Timer
const startLogOutTimer = function () {
    // Set time to 5 minutes
    let time = 120;
    

    // Call the timer every second
    const timer = setInterval(function(){
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    // In each call, print the remaining time to UI
     time = time; //label.textContent = time;

     // Decrease 1s
    time--;
    console.log(`${min} : ${sec}`);
   
    if (time === 0){
        
        clearInterval(timer);
    }
    
    }, 1000)

}
startLogOutTimer()
