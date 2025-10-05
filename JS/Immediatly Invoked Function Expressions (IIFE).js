const runOnce = function() {
    console.log(`This will never run again!`);
}
runOnce();


// IIFE
(function(){
console.log(`This will never run again!`);

})();  // this is the pattern that it invokes a function and u can never again run it 


// OR

(() => console.log('This will ALSO never run again!'))(); // - but you need to wrap it like this in order to work


{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(isPrivate);
console.log(notPrivate);
