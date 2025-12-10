// 1. Closure Counter
// Create a function createCounter(start) that:
// stores a start number in a closure
// returns an object with methods: inc(), dec(), and value()
// operations should NOT be async

function createCounter(start) {
    return {
        inc() {
            start += 1;
        },
        dec() {
            start -= 1;
        },

        value () {
            return start;
        }
    }
}


const d = createCounter(5);
d.inc(); 
d.dec();
d.dec();
console.log(d.value()); // should print 5



// 2. Async hello
// Write a function delayedHello(name, ms) that returns a Promise that resolves to:
function delayedHello(name, ms) {
    return new Promise(resolve => {
        setTimeout(() => {

            console.log(`Hello, ${name}!`);
            resolve
        }, ms);
    })
}
delayedHello('Carlos', 2000)




// 3. Repeat with delay
// Write a function repeat(fn, times, delay) that:
// calls fn() times times
// waits delay ms between each call
// returns a Promise that resolves when all repeats are done

async function repeat(fn, times, delayMs) {
    function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < times; i++) {
        fn();
        await wait(delayMs)
    }
}
repeat(() => console.log("hi"), 3, 200); // prints hi three times with 200ms spacing



// 4. Async Closure Counter
// Like your previous attempt, but correctly:
// inc() waits 100ms, increments the number, and resolves to new count
// get() returns the current count (Promise)

function makeAsyncCounter1() {
    let count = 0;
    return {
        async inc() {
            await new Promise(resolve => setTimeout(resolve, 100));
            count++;
            return count; 
        },

        async get() {
            return count;
        }
    };
}
const c = makeAsyncCounter1();
await c.inc();
await c.inc();
console.log(await c.get()); // should be 2




// 5. Timeout wrapper
// Write a function withTimeout(promise, ms) that:
// returns a new Promise that resolves/rejects with promise
// but rejects with "Timeout" if promise does not settle in ms ms

function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject("Timeout"), ms)
    );
    
    return Promise.race([promise, timeout]);
}
const p = new Promise(resolve => setTimeout(() => resolve("Done"), 1000));

withTimeout(p, 500)
    .then(console.log)
    .catch(console.log); 

withTimeout(p, 1500)
    .then(console.log)
    .catch(console.log); 



// 6. Wait-until
// Implement waitUntil(conditionFn, interval=50):
// returns a Promise
// keeps checking conditionFn() every interval until it returns true

async function waitUntil(conditionFn, interval = 50){
    return new Promise((resolve) => {
        const check = setInterval(() => {
            if (conditionFn()){
                clearInterval(check);
                resolve();
            }
        }, interval);
        
})}

let x = 0;
setTimeout(() => x = 10, 500);
await waitUntil(() => x === 10);
console.log("ready!");




// Countdown
function countdown(n) {
  let cur = n;
  const id = setInterval(() => {
    console.log(cur);
    if (cur-- <= 0) clearInterval(id);
  }, 1000);
}
countdown(5);


// Delay Function (Using setTimeout)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// usage:
delay(1000).then(() => console.log("done"));


// Promise that resolves after 2 seconds
function waitTwoSecond(){
  return new Promise(resolve => setTimeout(resolve,2000))
}
waitTwoSecond().then(console.log('finished'))


// Fake API Call
function fakeAPICall(){
  const delay = 1000 + Math.random() * 2000; 
  return new Promise(resolve => {
    setTimeout(() => resolve({id: 1, name: 'John'}), delay);
  });
}
fakeAPICall().then(data => console.log('got', data))


// Promise Chain
function step(ms, msg) {
  return new Promise(resolve => setTimeout(() => { console.log(msg); resolve()}, ms));
}

step(1000, 'Step 1')
.then(() => step(1500, 'Step 2'))
.then(() => step(500, 'step 3'));


// Convert a callback to a Promise
function loadData(callback) {
  setTimeout(() => callback("data"), 1000);
}

function loadDataPromise() {
  return new Promise(resolve => loadData(resolve));
}

loadDataPromise().then(data => console.log(data));




// Use async/await to fetch fake data
function fakeAPICall(){
  const delay = 1000 + Math.random() * 2000; 
  return new Promise(resolve => {
    setTimeout(() => resolve({id: 1, name: 'John'}), delay);
  });
}

async function getUser(){
  const user = await fakeAPICall();
  return user;
}

(async () => {
  console.log(await getUser());
})();


// Run tasks sequentially
function step(ms, msg) {
  return new Promise(resolve => setTimeout(() => { console.log(msg); resolve()}, ms));
}

async function sequential() {
  await step(2000, 'A done');
  await step(1000, 'B done');
  await step(3000, 'C done')
}
sequential();


// Run tasks in parallel (Promise.all)
function task(name, ms){
  return new Promise(resolve => setTimeout(() => resolve(name + ' finished'),ms));
}

async function parallel(){
  const results = await Promise.all([task('A', 2000), task('B', 4000), task('C', 3000)]);
  console.log(results);
}
parallel()


// Timeout a Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function withTimeout(promise,ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))
  ]);
}
withTimeout(delay(3000), 2000).catch(err => console.error(err.message));




// 1. Recursion & stack
// Exercise 1.1 (easy)
// Write a recursive sum(n) that returns 1 + 2 + ... + n. What happens if n is very large?
Expected: sum(5) === 15.


function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5));




// // Exercise 1.2 (medium)
// // Write a recursive function flatten(arr) that flattens nested arrays of numbers to one-level array (e.g. [1,[2,[3]],4] → [1,2,3,4]).
function flatten(arr){
    let result = [];

    for (const item of arr){
        if (Array.isArray(item)){
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}
console.log(flatten([5,3,[4,5,[2,3,7]]]));
// // flatten([5,3,[4,5,[2,3,7]]]), should be with array at the beginning, if I do like (5,3,[2,3,4]), it could open an error;


// // Exercise 1.3 (hard)
// // Write deepClone(obj) using recursion that copies objects/arrays (no functions, no DOM, no circular refs). 
// What happens with circular references? How to detect them?
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object'){
        return obj;
    }

    if (Array.isArray(obj)){
        return obj.map = deepClone(obj);
    };

    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key]);
        }
    }

    return copy;
}



// // 2. Rest parameters and spread syntax
// // Exercise 2.1 (easy)
// // Write concatAll(...arrays) that accepts any number of arrays and returns a single array with all elements.

function concatAll(...arrays) {
    return arrays.reduce((acc, arr) => acc.concat(arr), []);
}
console.log(concatAll([1,2],[3,4],[5])); // [1,2,3,4,5]



// // Exercise 2.2 (medium)
// // Write applyMax(fn, arr) that calls fn with arr elements as arguments using spread and returns the value. Example: applyMax(Math.max, [3,7,2]) === 7.
function applyMax(fn, arr) {
   return fn(...arr);
}
console.log(applyMax(Math.max, [3, 7, 2])); // 7



// 3. Variable scope, closure
// Exercise 3.2 (medium)
// Implement makeCounter(start) returning an object with inc() and value() that use closures to keep private state.

function makeCounter(start){
    let count = start;

    return {
        inc(){
            count++;
        },
        value(){
            return count;
            
        }
    }
}


// Exercise 3.3 (hard)
// Explain lexical scope by writing a function makeAdders() that returns an array of functions [f0, f1, f2] where fi() returns i. Do it first incorrectly (common pitfall) and then correctly.

// use block-scoped let in the loop
function makeAdders() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(() => i); // each arrow closes over a different i
  }
  return arr;
}

// OR

// create a new scope per iteration (IIFE / factory)
function makeAdders() {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push((function(n) {
      return function() { return n; };
    })(i)); // n is the captured value
  }
  return arr;
}
const [f0,f1,f2] = makeAdders();
console.log(f0(), f1(), f2()); // should log: 0 1 2


