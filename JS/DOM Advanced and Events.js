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





/// 202. Event Propagation: Bubbling and Capturing (Important!)
// When an event occurs in the DOM, it doesn’t happen directly on the target element in isolation. Instead, the event goes through three phases:

// Capturing phase (trickling down):
// The event starts from the document root and travels down the DOM tree toward the target element. This is also called the capture phase. You can listen to events during this phase by setting { capture: true } in addEventListener.

// Target phase:
// The event reaches the target element itself. Here, the event listeners attached directly to the element are triggered.

// Bubbling phase (trickling up):
// After reaching the target, the event bubbles up from the target element back toward the document root, triggering any event listeners set on the ancestor elements along the way (unless stopPropagation() is called).

// Example in simple terms:
// Click on a <button> inside a <div> inside the <body>.
// Capturing phase: document → body → div → button
// Target phase: button itself
// Bubbling phase: button → div → body → document





/// 203. Event Propagation in Practice
// rgb(255,555,555)
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
console.log(randomColor(0,255));


// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);

//   // Stop propagation (still not good idea to use it)(but can fix in very complicated applications sometimes)
//   // e.stopPropagation();
  
// })
// document.querySelector('.nav__links').addEventListener('click', function(e){
// this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// })
// document.querySelector('.nav').addEventListener('click', function(e){
// this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// })

// // if we want to catch events in the capturing phase, we can define a third parameter in the addEventListener function (true or false (false is like not having anything there, doesn't do nothing))
// document.querySelector('.nav').addEventListener('click', function(e){
// this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// }, true);
// the others are searching for bubbling event, that's why are gonna be second,third...





/// 204 Event Delegation: Implementing Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
    
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'});
//   })
// })
// if we would attach like this to 10k, will do 10k copies of this copy and will not be good :
// Implementing event delegation (through bubbling) :
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log(e.target)
   e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')){
    console.log('LINK');
    
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});
  }
})








/// 205. DOM Traversing
// querySelector works on elements, not only on the document

// Going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // gives an HTMLCollection which is live collected
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


// Going upwards : parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('header').style.background = 'var(--gradient-secondary)'
h1.closest('h1').style.background = 'var(--gradient-secondary)' // it will be the one 

// Going sideways : siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// If we need all siblings, we can move to the parent element and choosing all them
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if (el !== h1) el.style.transform = 'scale(0.5)'
})






/// 206. Building a Tabbed Component
  const tabs = document.querySelectorAll('.operations__tab');
  const tabsContainer = document.querySelector('.operations__tab-container');
  const tabsContent = document.querySelectorAll('.operations__content');

  tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked);
    
    // Guard clause
    if (!clicked) return;
    
    // Remove the other
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Active tab
    clicked.classList.add('operations__tab--active')


    // Activate content area
  
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  })








  /// 207 . Passing Arguments to Event Handlers

  // Menu fade animation 
  const handleHover = function (e) {
        if (e.target.classList.contains('nav__link')){
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');


      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      })

      logo.style.opacity = this;
    }
  }

  const nav = document.querySelector('.nav');

  // Passing 'argument' into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout',handleHover.bind(1)); 







// 208. Implementing a Sticky Navigation: The Scroll Event

// Sticky navigation
//  const initialCoords = section1.getBoundingClientRect();

// Scroll event
// window.addEventListener('scroll', function(e){
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky') 
    
//   } else nav.classList.remove('sticky')
// })
//  console.log(initialCoords);

 // not good way to go with the scroll event

 






 /// 209. Sticky Navigation : The Intersection Observer API

// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
    
//   })
// }

// const obsOptions = {
//   root : null,
//   threshold : 0.1
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header1 = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);


const stickyNav = function (entries){
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, 
  threshold : 0,
  rootMargin : `-${navHeight}px`,
});
headerObserver.observe(header1);








/// 210. Revealing Elements on Scroll
const allSections1 = document.querySelectorAll('.section');


const revealSection = function(entries, observer){

  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
  })

};

const sectionObserver = new IntersectionObserver
(revealSection, {
  root: null,
  threshold: 0.15
})
allSections1.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})


/// 211. Fixing a Small Scrolling Bug
// Instead of 
// const revealSection = function(entries, observer){
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden')
//   observer.unobserve(entry.target)
  
// };

// do this :
// const revealSection = function(entries, observer){

//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden')
//     observer.unobserve(entry.target)
//   })

// };





/// 212. Lazy Loading Images
// skipped 





/// 213. Building a Slider Component: Part 1.
// Selectors
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;

// Move slides: slide 0 -> 0%, slide 1 -> 100%, etc.
// I prefer translateX for clarity.
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// Next / Prev
const nextSlide = function () {
  curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Buttons
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


/// 214 Building a Slider Component : Part 2.
// Keyboard
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Dots
const createDots = function () {
  slides.forEach((_, i) =>
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  );
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  const dot = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
  if (dot) dot.classList.add('dots__dot--active');
};

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // dataset values are strings — convert to number to avoid surprises
    const slide = Number(e.target.dataset.slide);
    curSlide = slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

// Init function to set initial state on page load / reload
const init = function () {
  createDots();      // create dot elements
  goToSlide(0);      // position slides so slide 0 is visible
  activateDot(0);    // activate dot 0
};

init();


// 215. Lifecycle DOM Events
// document.addEventListener("DOMContentLoaded", function(e){
//   console.log('HTML parsed and DOM tree built!');
// })

// window.addEventListener('load', function(e){
//   console.log('Page fully loaded', e);
// })

// window.addEventListener('beforeunload', function (e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })




/// 216. Efficient Script Loading: defer and async
// Regular - <script src="script.js">
// Async - <script async src="script.js">
// Defer - <script defer src = "script.js">


/// (Regular) END OF BODY
// Scripts are fetched and executed after the HTML is completely parsed 
// Use if you need to support old browsers
// You can, of course, use different strategies for different scripts. Usually a complete web applications includes more than just one script

/// (Async) ASYNC IN HEAD
// Scripts are fetched asynchronously and executed immediately
// Usually the DOMContentLoaded event waits for all scripts to execute, except for async scripts. Som DOMContentLoaded does not wait for an async script
// Scripts not guaranteed to execute in order
// Use for 3rd-party scripts where order doesn't matter (e.g. Google Analytics)


/// (Defer) DEFER IN HEAD
// Scripts are fetched asynchronously and executed after the HTML is completely parsed
// DOMContentLoaded event fires after defer script is executed
// Scripts are executed in order
// This is overall the best solution! Use for your own scripts, and when order matters (e.g. including a library)
