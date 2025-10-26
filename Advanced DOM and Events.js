// DOM INTERFACE 
// DOM — Document Object Model.

// - Allows us to make JavaScript interact with the browser.
// - We can write JavaScript to create, modify and delete HTML elements;
// - set styles, classes and attributes; and listen and respond to events;
// - DOM tree is generated from  an HTML document, which we can then interact with;
// - DOM is a very complex API  that contains lots of methods and properties to interact with the DOM tree 
// (.querySelector() / .addEventListener() / .createElement() / .innterHTML / .textContent / .children / etc...)
// DOM properties are organized for different html objects
// Application Programming Interface - API


// HOW THE DOM API IS ORGANIZED BEHIND THE SCENES :
// EventTarget - .addEventListener() / .removeEventListener()
// Window - Global object, lots of methods and properties, many unrelated to DOM
// NODE - .textContent / .childNodes / .parentNode / .cloneNode()

// ELEMENT  gives each html element those properties :
// .innerHTML
// .classList
// .children
// .parentElement
// .append()
// .remove()
// .insertAdjacentHTML()
// .querySelector()
// .closest()
// .matches()
// .scrollIntoView()
// .setAttribute()


// Inheritance of methods and properties
// Example: Any HTMLElement will have acess to .addEventListener(), .cloneNode() or .closest() methods
// (THIS IS NOT A DOM TREE)


// DOCUMENT : .querySelector(), .createElement(), .getElementById()

// Bringing it all together 
// HTML creates the structure of the page.
// The browser turns that HTML into a DOM tree (a bunch of objects).
// JavaScript uses the DOM API to read, change, or listen to the page.
// When JavaScript changes something in the DOM — the browser automatically re-renders the page on screen.


// 198. Selecting, Creating, and Deleting Elements
// HTMLCollection / NodeList what are those ?
// if the DOM changes, the htmlCollection is immediately changed automatically

// .insertAdjacentHTML :
// It lets you insert HTML code (as text) directly into the DOM — without destroying the existing elements.
// So instead of replacing everything (like .innerHTML does), it just adds new HTML next to or inside the element you choose.


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
document.querySelectorAll('.section')

const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
const allBtns = document.getElementsByTagName('button')
console.log(allBtns);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie--message')
message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"></button>'

header.prepend(message)
header.append(message)

// if we want to copy and paste it the same thing in many places
// header.append(message.cloneNode(true))


// header.before(message);
header.after(message)


// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.remove();
})

//before this it used to get first into the parent Element :
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
    message.parentElement.removeChild(message);
});
