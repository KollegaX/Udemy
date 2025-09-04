//// DOCUMENT OBJECT MODEL : Structured representation of html documents. Allows JS to access HTML elements and styles and manipulate them.
//// DOM !== JS, DOM Methods and Properties are from WEB APIs, except DOM they are Timers, Fetch and ....

'use strict';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.message').textContent = solve();
function solve(){
    return Math.trunc(Math.random() * 100);
}


document.querySelector('guess').value = 23;
console.log(document.querySelector('.guess').value);


document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    
})



/// for example I can do this :
/// Refactoring :
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
displayMessage('hello')
