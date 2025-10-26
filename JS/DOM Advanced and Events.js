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








/// 199. Styles, Attributes and Classes
// to set a style on element :
message.style.backgroundColor = '#37383d' //the CamelCase (backgroundColor)
message.style.width = '120%';

console.log(message.style.color); // can't get it because its not manually typed (inline) because its behind a class

// to get it u need to :
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// how to add example height 
message.style.height = Number.parseFloat
(getComputedStyle(message).height, 10) + 40 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered')


/// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beatiful minimalist logo'


// Non-standard
// we can't use the 
console.log(logo.designer);
// to access a like .designer that doesnt normally exist in JS :
console.log(logo.getAttribute('designer')); 
// or set it :
logo.setAttribute('company','Bankist')


console.log(logo.src);
console.log(logo.getAttribute('src'));

// on links (important)
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

 // Data attributes
 console.log(logo.dataset.versionNumber);

 // Classes
 logo.classList.add('c');
 logo.classList.remove('c');
 logo.classList.toggle('c');
 logo.classList.contains('c'); // not includes

 // Don't use (!!!)
 logo.className = 'jonas'







/// 200. Implementing Smooth Scrolling
 /// Old School Way :
 const btnScrollTo = document.querySelector('.btn--scroll-to');
 const section1 = document.querySelector('#section--1');
 
 btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
  
  // Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  /// Making it smooth
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

   section1.scrollIntoView({behavior: 'smooth'}) // Modern browser (smooth)
 });





 /// 201. Types of Events and Event Handlers
 const h1 = document.querySelector('h1');

//  h1.addEventListener('mouseenter', function(e){
//   alert('addEventListener: Great! You are reading the heading :D')
//  })

//  // another way :
//  h1.onmouseenter = function(e){
//   alert('addEventListener: Great! You are reading the heading :D')
//  };


 // removing it :
 // if we want to use only once the EventListenr
 const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading :D')

  // h1.removeEventListener('mouseenter', alertH1)
 }
 h1.addEventListener('mouseenter', alertH1)

 // we can remove it also if we want after some time :
 setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

 /// html is directly <h1 onclick="alert('HTML alert')"></h1>;
