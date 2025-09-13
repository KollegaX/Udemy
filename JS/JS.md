# Compilation vs Interpretation vs JIT

## Compilation

-   Entire code is converted into machine code at once
-   Written to a binary file that can be executed by a computer

## Interpretation

-   Interpreter runs through the source code
-   Executes it line by line

## Just-In-Time (JIT) Compilation

-   Hybrid approach
-   Your code starts running right away (like interpreted code)
-   While running, the engine watches which parts of the code are used
    the most
-   It compiles those "hot" parts into fast machine code on the fly
-   So, JIT = "compile just in time when needed."

------------------------------------------------------------------------

## Key Differences

-   **Interpreted languages** (like classic JavaScript, Python) normally
    run line by line → quick startup, slower execution\
-   **Compiled languages** (like C, C++) are turned into machine code
    ahead of time → slower startup (compilation needed), but much faster
    execution\
-   **JIT compilation** is a hybrid: starts fast, and optimizes
    frequently used code into machine code during execution


## Javascript RUNTIME in Browsers
- JavaScript Engine - Without a Engine, there is no runtime
- Even with the Engine, its not enough because we need the WEB APIs (DOM, TIMERS, FETCH API, ...)
- WEB APIs = Functionalities provided to the engine, accessible on window object
- CALLBACK QUEUE (CLICK, TIMER, DATA) : EXAMPLE of 'click', which is callback function from DOM Event Listener

## CALL STACK :
- The 'Call Stack' is a data structure (a stack: last in, first out) that keeps track of which functions are running and where to return after each function finishes.


## JavaScript RUNTIME outside Browsers (node.js)
- pretty similar but without the WEB APIs, because it's the browser who is providing these APIs
- we have multiple C++ Bindings & Thread Pool

# Compilation vs Interpretation vs JIT

## Compilation

-   Entire code is converted into machine code at once
-   Written to a binary file that can be executed by a computer

## Interpretation

-   Interpreter runs through the source code
-   Executes it line by line

## Just-In-Time (JIT) Compilation

-   Hybrid approach
-   Your code starts running right away (like interpreted code)
-   While running, the engine watches which parts of the code are used
    the most
-   It compiles those "hot" parts into fast machine code on the fly
-   So, JIT = "compile just in time when needed."

------------------------------------------------------------------------

## Key Differences

-   **Interpreted languages** (like classic JavaScript, Python) normally
    run line by line → quick startup, slower execution\
-   **Compiled languages** (like C, C++) are turned into machine code
    ahead of time → slower startup (compilation needed), but much faster
    execution\
-   **JIT compilation** is a hybrid: starts fast, and optimizes
    frequently used code into machine code during execution


## Javascript RUNTIME in Browsers
- JavaScript Engine - Without a Engine, there is no runtime
- Even with the Engine, its not enough because we need the WEB APIs (DOM, TIMERS, FETCH API, ...)
- WEB APIs = Functionalities provided to the engine, accessible on window object
- CALLBACK QUEUE (CLICK, TIMER, DATA) : EXAMPLE of 'click', which is callback function from DOM Event Listener

## CALL STACK :
- The 'Call Stack' is a data structure (a stack: last in, first out) that keeps track of which functions are running and where to return after each function finishes.


## JavaScript RUNTIME outside Browsers (node.js)
- pretty similar but without the WEB APIs, because it's the browser who is providing these APIs
- we have multiple C++ Bindings & Thread Pool


------------------------------------------------------------------------

# Scoping in JavaScript : Concepts
## Scoping 
- How our program's variables are organized and accessed. "Where do variables live?" or "Where can we access a certain variable, and where not?"

## Lexical Scoping
- Scoping is controlled by placement of functions and blocks in the code;

## Scope 
- Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope;

## Scope of a variable
- Region of our code where a certain variable can be accessed;

Global scope; Function scope/Local scope; Block scope (ES6)

## Scope Chain: inner (child) scopes can access variables from outer (parent) scopes
## let and const are block-scoped, var is function scoped

## Summary
- Scoping asks the question *“Where do variables live?”* or *“Where can we access a certain variable, and where not?”*
- There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks.
- Only `let` and `const` variables are block-scoped. Variables declared with `var` end up in the closest function scope.
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
- Every scope always has access to all the variables from all its outer scopes. This is the **scope chain**!
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called **variable lookup**.
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
- The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!



------------------------------------------------------------------------

# Dot notation vs Bracket notation
In JavaScript, there are two main ways to access object properties:
Dot notation: obj.prop
Accesses the property literally named "prop" on the object.
Cannot use a variable to dynamically select the property.

Bracket notation: obj[propName]
Accesses the property whose name is the value of propName.
Allows dynamic property access.


------------------------------------------------------------------------

# Preventing NaN with Default Values (|| 0) (focuses on the problem/solution)
- Using || 0 to Provide Default Values in JavaScript (clear and descriptive)
- Handling Undefined Properties Safely in JavaScript (slightly broader context)
- JavaScript Tip: Defaulting Undefined Values to Zero (friendly/tip-like style)
``` js
// An object with star counts for different ranks:
const rankStars = { admin: 3, mod: 2 };
const userRank = 'guest'; // 'guest' does not exist in rankStars

// Accessing a non-existent key returns undefined:
console.log(rankStars[userRank]);
// Output: undefined

// In a for-loop, undefined isn’t a problem—i < undefined evaluates to false,
// so the loop simply won't run. But using undefined in calculations can cause NaN:
const starsRaw = rankStars[userRank];
console.log(starsRaw + 2);
// NaN (because undefined + a number is not valid)

// To avoid this, provide a default value using || 0:
const stars = rankStars[userRank] || 0;
console.log(stars + 2);
// 2 (works correctly because || 0 replaces undefined with 0)
```

🔹 **Explanation:**\
- `rankStars[userRank]` is `undefined` when the key doesn't exist.\
- The `|| 0` operator ensures a default value of `0`, preventing `NaN`
in further calculations.\
- This pattern is useful not just in loops but anywhere you might access
properties that may not exist.





# Understanding `this` in JavaScript 
## 1. Strict Mode and `this`

- **Strict mode** (`"use strict";`) is a stricter variant of JavaScript that catches common bugs.

- **Effect on `this` in simple function calls:**

| Mode           | `this` inside a simple function call (`func()`)  |
|----------------|--------------------------------------------------|
| Non-strict     | Points to the global object (`window` or `global`) |
| Strict mode    | `undefined`                                      |



## 2. Method Call (`obj.method()`)

- When a function is called as a **method of an object**, `this` refers to the **object owning the method**.

```js
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

obj.greet(); // Logs: "Alice"
```

## 3. Simple Function Call (func())
- Calling a function without an object context.
```js
function showThis() {
  console.log(this);
}

showThis();
```
Behavior :
| **Mode**        | **`this` inside function call**       |
|-----------------|---------------------------------------|
| Non-strict      | Global object (`window` or `global`)  |
| Strict mode     | `undefined`                           |



## 4. Arrow Functions
- Arrow functions do NOT have their own this.
- Instead, this is lexically inherited from the surrounding (parent) scope.
```js
const obj = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet(); // Usually undefined or global `this.name`
```
- This means arrow functions don’t bind this to the object, even if called as a method.


## 5. Event Listeners and this
- When using a regular function as an event handler, this points to the element that the listener is attached to:
```js
button.addEventListener("click", function() {
  console.log(this); // Logs the button element
});
```

- When using an arrow function, this is inherited from the outer scope, NOT the element:
```js
button.addEventListener("click", () => {
  console.log(this); // Not the button, likely window or undefined
});
```

- Alternative way to get the element inside any handler:
```js
button.addEventListener("click", (event) => {
  console.log(event.target); // Always the element clicked
});
```


| **Context**                       | **`this` value**                                |
|----------------------------------|--------------------------------------------------|
| Method call (`obj.method()`)     | The object (`obj`)                              |
| Simple function (non-strict)     | Global object (`window` or `global`)            |
| Simple function (strict)         | `undefined`                                     |
| Arrow function                   | Lexical `this` from surrounding scope           |
| Event listener (regular func)    | The element the listener is attached to         |
| Event listener (arrow func)      | Lexical `this` from surrounding scope           |
