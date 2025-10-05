const secureBooking = function(){
let passengerCount = 0;

return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
    
};
};

const booker = secureBooking();

booker();
booker();
booker();


// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;
// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place;
// A closure is like a backpack that a function carries around whereever it goes. This backpack has all the variables that were present in the environment where the function was created.
/// WE DO NOT HAVE TO MANUALLY CREATE CLOSURES, THIS IS A JAVASCRIPT FEATURE THAT HAPPENS AUTOMATICALLY. WE CAN'T EVEN ACCESS CLOSED-OVER VARIABLES EXPLICITLY. A CLOSURE IS NOT A TANGIBLE JAVASCRIPT OBJECT.

// console.dir(booker)
debugger



// More closures
/// EXAMPLE 1:
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 777;
        f = function(){
        console.log(b * 2);
    }
}

g()
f()  // 46 // u cannot just call f(), because g() hasnt been called
console.dir(f)

// Re-assigning f function
h()
f() // 1554
console.dir(f)


/// EXAMPLE 2:
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
        
    }, wait * 1000) //callback function

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000; /// the closure has priority, so this will be not used
boardPassengers(180, 3)



// ---------------------------------------------------------------------------------------
// Practice :
    
(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(x){
        header.style.color = 'blue';
    })
})();

// The IIFE (Immediately Invoked Function Expression) runs as soon as the script is loaded. Inside it, we select the <h1> element and set its color to red. Even though the IIFE finishes executing, the event listener that was defined inside it remains active.
// When the user clicks anywhere on the page, the event listener triggers and changes the header’s color to blue.
// So, even though the IIFE itself has already executed, the inner event listener still has access to the header variable through closure — meaning it “remembers” the variable from when it was created inside the IIFE.
