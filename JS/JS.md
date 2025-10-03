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



# 🧠 Memory Management: Primitives vs Objects in JavaScript

## 📌 How and Where Are Variables Created in JavaScript?

Unlike some other languages, **memory is automatically managed** by JavaScript behind the scenes.  
Every value we create in JavaScript goes through a **memory lifecycle**:

---

### 1. **Allocate Memory**
```js
let temp = 23.7;
```
Whenever we assign a value to a new variable, the engine automatically **allocates (reserves)** a piece of memory to store the value.

---

### 2. **Use Memory**
```js
temp = temp + 5;
Math.round(temp);
```
While the code is running, the value is **written, read, and updated** in the allocated piece of memory.

---

### 3. **Release Memory**
When no longer needed, the value is **deleted from memory** to free up resources.  
That released memory can then be used for new values.

---

## 📌 Where Is Memory Allocated in JavaScript?

Values in JavaScript are either **primitives** or **objects**.

### **Primitives**
- Number  
- String  
- Boolean  
- Undefined  
- Null  
- Symbol  
- BigInt  

📍 Memory for primitives is stored **directly in the call stack**.

---

### **Objects**
- Object literals  
- Arrays  
- Functions  
- And many more...  

📍 Memory for objects is allocated in the **heap**.  

But here’s the key:  
- The **reference (pointer) to the object** is stored in the **call stack**.  
- The **actual object data** lives in the **heap**.  

---

## 📌 Understanding Object References

What you need to understand:  
- Variables in the call stack **do not hold objects directly**.  
- They hold **references (pointers)** to objects stored in the heap.  
- To us developers, this mechanism is completely hidden. On the surface, it **looks like** the variable is holding the object itself, but in reality, it’s only storing the reference.

---

### Example: Copying References

```js
const location = { city: 'Faro', country: 'Portugal' };
const newLocation = location;
```

- `location` holds a **reference** to the object in the heap.  
- When we assign `newLocation = location`, we’re **copying the reference**, not the actual object.  
- Both variables now point to the **same object in memory**.  

```js
newLocation.city = 'Lisbon';
console.log(location.city); // "Lisbon" (changed too!)
```

✔️ **Takeaway**: Copying an object variable **only copies the reference**, **not the object itself**.



# 🔑 JavaScript: Value vs Reference (Complete Summary)

## 📌 Assignment Behavior by Type

| **Type**        | **Assignment Behavior** | **How to Create a New Copy**                                    |
|------------------|-----------------------|-----------------------------------------------------------------|
| **Primitives**   | **Copied by value**    | N/A – Primitives (numbers, strings, booleans, etc.) are already independent. |
| **Objects**      | **Copied by reference**| Use `{ ...obj }`, `Object.assign({}, obj)`, or `structuredClone(obj)` for deep copies. |
| **Arrays**       | **Copied by reference**| Use `[...arr]`, `arr.slice()`, or array methods like `map()`, `filter()`, `concat()` that return new arrays. |
| **Functions**    | **Copied by reference**| Same as objects—functions are reference types.                   |
| **Dates, Maps**  | **Copied by reference**| Use their constructors or libraries (e.g., `new Date(oldDate)`, `new Map(oldMap)`). |

---

## 📌 Array Methods That Return a New Array (Copy by Value)

Some array methods **do not reuse the same reference**—they **return a new array** (shallow copy):

| **Method**         | **Behavior**                                                     |
|---------------------|-----------------------------------------------------------------|
| `slice()`           | Returns a **shallow copy** of all or part of the array.          |
| `concat()`          | Combines arrays/values into a **new array**.                     |
| `map()`             | Transforms each element, returns a **new array**.                |
| `filter()`          | Keeps elements passing a test, returns a **new array**.          |
| `flat()`, `flatMap()`| Flattens/transform arrays, returns a **new array**.             |
| `toSorted()` (ES2023)| Returns a sorted **copy** without touching the original.        |
| `toReversed()` (ES2023)| Returns a **reversed copy**, original stays the same.         |
| `toSpliced()` (ES2023) | Returns a **spliced copy**, leaves original untouched.        |

### 🧩 **Examples**
```js
// slice
const arr = [1, 2, 3];
const copy = arr.slice();
copy.push(4);
console.log(arr);  // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]

// map
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(nums);    // [1, 2, 3]
console.log(doubled); // [2, 4, 6]

// concat
const a = [1, 2], b = [3, 4];
const combined = a.concat(b);
console.log(combined); // [1, 2, 3, 4]
```

# ES6 Object Enhancements
## 1. Property Shorthand
- Before ES6, when using variables as object properties, you had to explicitly write key: value.

Example (Pre-ES6) :
```js
const openingHours = {mon: "9-5"};
const restaurant = {
    openingHours: openingHours
 };
```

With ES6, if the property key and variable name are the same, 
you can just write the variable once (shorthand syntax).

Example (ES6+):
```js
 const openingHours = { mon: "9-5" };
 const restaurant = {
   openingHours
 };
```

## 2. Method Shorthand
- Before ES6, functions inside objects had to be defined with the "function" keyword.

Example (Pre-ES6):
```js
 const restaurant = {
     order: function(start, main) {
         return `${start} & ${main}`;
      }
 };
```

With ES6, you can omit "function" when defining methods in objects or classes.

Example (ES6+):
```js
 const restaurant = {
    order(start, main) {
      return `${start} & ${main}`;
    }
  };
```

Note: This shorthand syntax ONLY works inside objects and classes.
You cannot write standalone functions as :
    ❌ order(start,main) {...}

Instead, use :
    ✅ function order (start,main) {...}
    ✅ const order = (start, main) => { ... }



## 3. Computed Property Names

You can use expressions as keys in object literals:

```js
const day = "mon";
const restaurant = {
  [day]: "9-5" // key will be "mon"
};
```

## 4. Object Destructuring

Extract object properties into variables easily:

```js
const restaurant = { name: "KollegaX", openingHours: { mon: "9-5" } };

// Basic destructuring
const { name, openingHours } = restaurant;
console.log(name); // "KollegaX"
console.log(openingHours); // { mon: "9-5" }

// Renaming variables
const { name: restaurantName } = restaurant;
console.log(restaurantName); // "KollegaX"

// Default values
const { rating = 5 } = restaurant;
console.log(rating); // 5 (default used)


```
## 5. Spread & Rest Operators
### Spread Operator
Used to **copy** or **merge** objects:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }
```


### Rest Operator
Used to collect remaining properties into a new object:
```js
const { a, ...rest } = obj2;

console.log(a);    // 1
console.log(rest); // { b: 2, c: 3 }
```


## 6. Object.assign()
Before spread syntax, you could copy or merge objects using `Object.assign()`:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1, { c: 3 });

console.log(obj2); // { a: 1, b: 2, c: 3 }
// Notes :
// Creates a shallow copy of the object.
// Useful for merging multiple objects into one.
```




## 7. New Object Methods
ES6+ introduced several helpful methods for working with objects:
```js
const obj = { a: 1, b: 2 };

// Get all keys
console.log(Object.keys(obj));   // ['a', 'b']

// Get all values
console.log(Object.values(obj)); // [1, 2]

// Get [key, value] pairs
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

// Convert array of pairs back to object
const entries = [['x', 10], ['y', 20]];
const newObj = Object.fromEntries(entries);
console.log(newObj); // { x: 10, y: 20 }
```

Notes:
Object.keys() → returns an array of keys.
Object.values() → returns an array of values.
Object.entries() → returns an array of [key, value] pairs.
Object.fromEntries() → converts an array of [key, value] pairs back to an object.



# Optional Chaining (`?.`) in JavaScript

Optional chaining (`?.`) is one of those tiny features that removes a lot of defensive boilerplate.  
Below is a concise but comprehensive reference: what it is, exact behavior, many examples (property access, computed, calls, arrays), evaluation order/short-circuiting, interactions with other operators (`??`, `||`, `&&`), TypeScript notes, common pitfalls and best practices.

---

## What it is — quick definition

Optional chaining `?.` lets you access a property, call a function, or index into a value **without throwing** when an intermediate value is `null` or `undefined`.  

👉 If the value to the left of `?.` is `null` or `undefined`, the expression **short-circuits** and evaluates to `undefined` (or does nothing in some contexts), instead of throwing.

## 1. Object property access
```js
const user = { profile: { name: "Alice" } };

console.log(user?.profile?.name);   // "Alice"
console.log(user?.address?.city);   // undefined (no error)
```

## 2. Computed property access
```js
const settings = { theme: "dark" };
const key = "theme";

console.log(settings?.[key]);   // "dark"

const empty = null;
console.log(empty?.[key]);      // undefined
```

## 3. Array indexing
```js
const arr = [10, 20, 30];

console.log(arr?.[1]);   // 20

const nothing = null;
console.log(nothing?.[0]);  // undefined
```

## 4. Function calls
```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet?.("Bob"));   // "Hello, Bob!"

const maybeFn = undefined;
console.log(maybeFn?.("Bob")); // undefined (no crash)
```

## 5. Chained deep access
```js
const data = {
  user: {
    profile: {
      avatar: { url: "https://example.com/avatar.png" }
    }
  }
};

console.log(data?.user?.profile?.avatar?.url); 
// "https://example.com/avatar.png"

console.log(data?.user?.account?.email); 
// undefined (instead of TypeError)
```

## 6. With ?? for defaults
```js
const config = null;
const theme = config?.settings?.theme ?? "light";

console.log(theme); // "light"
```

## 7. Safe method calls
```js
const person = {
  sayHi() { return "Hi!"; }
};

console.log(person.sayHi?.());   // "Hi!"

const nobody = {};
console.log(nobody.sayHi?.());   // undefined (no crash)
```

## 8. Working with falsy but not nullish values
```js
const obj = { value: 0, text: "" };

console.log(obj?.value); // 0 (not nullish)
console.log(obj?.text);  // "" (not nullish)
```

# JavaScript Set Method
### Basics
- A Set is a collection of unique values.
- Values can be of any type (primitive or object).
- Duplicates are ignored automatically.

### Main Methods
- add(value) → adds a value
- delete(value) → removes a value
- has(value) → checks if value exists
- clear() → removes all items
- size → returns number of items
```js
const s = new Set();
s.add(10);
s.add(20);
console.log(s.has(10)); // true
s.delete(20);
console.log(s.size);    // 1
```

### Iterating
- Sets are iterable:
```js
const s = new Set([1, 2, 3]);
for (let val of s) {
  console.log(val);
}
// or:
s.forEach(v => console.log(v));
```
### ⚠️ Important: No Indexes
- Unlike arrays, Sets don’t have indexes.
- You can’t do s[0] or s.at(0) directly.

### Solution: Convert to Array (to use indexes)
- Use Array.from(set)
- Or use the spread operator [...set]
```js
const s = new Set([10, 20, 30]);

const arr1 = Array.from(s);
const arr2 = [...s];

console.log(arr1[0]); // 10
console.log(arr2[2]); // 30
```


### Common Use Cases
- Removing duplicates:
```js
const nums = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]
```
- Fast membership checking :
```js
const seen = new Set([100, 200]);
console.log(seen.has(200)); // true
```


# ES2025 Set Methods: `.intersection` and `.union`

## `.intersection` Method

The `.intersection()` method in ES2025 allows you to find common elements between two `Set` objects.

```js
const commonFoods = italianFoods.intersection(mexicanFoods);

console.log('Intersection :', commonFoods);
console.log([...commonFoods]); // converted to array
```
- Note: You can only use .intersection() on Set objects, not on arrays.


### Manual Intersection with Sets
- If your environment does not support .intersection(), you can do it manually:
```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// Intersection manually
const intersection = new Set([...A].filter(x => B.has(x)));
console.log(intersection); // Set {3, 4}
```

### Using Arrays Only
- You can also find intersections using arrays, though it’s less efficient for large arrays:
```js 
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection1 = arr1.filter(x => arr2.includes(x));
console.log(intersection1); // [3, 4]
```
- Notes:
- This returns an array, not a Set.
- Using .includes() is O(n), so large arrays are slower. Using a Set improves performance.


### Using a Helper Function
- You can write a helper function to replicate .intersection() in any JS version:
```js
function intersect(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

// Example
const result = intersect(new Set([1,2,3]), new Set([2,3,4]));
console.log(result); // Set {2, 3}
```
- .intersection() is just a convenience.
- The underlying logic is always:
- “Keep only items from Set A that also exist in Set B.”
- Using filter + has or includes lets you replicate it in any JS version.


### .union Method
- The .union() method in ES2025 allows you to combine two Set objects into one with all unique elements.
```js
const allFoods = italianFoods.union(mexicanFoods);

console.log('Union :', allFoods);
console.log([...allFoods]); // converted to array
```

### Manual Union with Sets
```js
const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// Union manually
const union = new Set([...A, ...B]);
console.log(union); // Set {1, 2, 3, 4, 5, 6}
```

### Using Arrays Only
```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const unionArr = Array.from(new Set([...arr1, ...arr2]));
console.log(unionArr); // [1, 2, 3, 4, 5, 6]
```
- Notes:
-Using a Set ensures all elements are unique.
- Converting back to an array is optional depending on your needs.


### Using a Helper Function for Union
```js
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

// Example
const resultUnion = union(new Set([1,2,3]), new Set([2,3,4]));
console.log(resultUnion); // Set {1, 2, 3, 4}
```

### .difference()
- Purpose: Returns a new Set with elements in the first set that are not in the second set.
```js
const diff = A.difference(B);
console.log(diff); // Set {1, 2}
```
### Manual Implementation:
```js
const difference = new Set([...A].filter(x => !B.has(x)));
```
- Think of it as A - B.


### .symmetricDifference()
- Purpose: Returns a new Set with elements in either set but not in both.
```js
const symDiff = A.symmetricDifference(B);
console.log(symDiff); // Set {1, 2, 5, 6}
```
- Manual Implementation:
```js
const symmetricDifference = new Set(
  [...A].filter(x => !B.has(x))
  .concat([...B].filter(x => !A.has(x)))
);
```
- Keeps elements exclusive to each set.


### Helper Functions for Older JS Versions
```js
function intersect(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)));
}

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)));
}

function symmetricDifference(setA, setB) {
  return new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
  ]);
}
```
- .union() simplifies combining Sets, but the underlying logic is just spreading both sets into a new Set to keep unique elements.

| Operation            | Modern ES2023+               | ES6 / Older Equivalent                                        |
|----------------------|-----------------------------|----------------------------------------------------------------|
| Union                | `A.union(B)`               | `new Set([...A, ...B])`                                       |
| Intersection         | `A.intersection(B)`        | `new Set([...A].filter(x => B.has(x)))`                        |
| Difference           | `A.difference(B)`          | `new Set([...A].filter(x => !B.has(x)))`                       |
| Symmetric Difference | `A.symmetricDifference(B)` | `new Set([...A].filter(x => !B.has(x)), [...B].filter(x => !A.has(x)))` |

------------------------------------------------------------------------

# JavaScript Maps

### 1.Creating a Map
```js
// Empty Map
const map1 = new Map();

// Map with initial key-value pairs
const map2 = new Map([
  ['name', 'Alice'],
  ['age', 25],
  [true, 'boolean key'],
  [{}, 'object key']
]);

console.log(map2);
```

### 2. Adding Elements
- You use the .set(key, value) method to add elements.
```js
const map = new Map();
map.set('name', 'Bob');
map.set('age', 30);
map.set(1, 'one');
map.set(true, 'yes');

console.log(map);
```
- Chaining is allowed:
```js
map.set('city', 'New York').set('country', 'USA');
```

### 3. Accessing Elements
- Use .get(key):
```js
console.log(map.get('name'));   // Bob
console.log(map.get(1));        // one
console.log(map.get(true));     // yes
console.log(map.get('unknown')); // undefined
```

### 4. Checking for Keys
- Use .has(key):
```js
console.log(map.has('age'));  // true
console.log(map.has('gender')); // false
```

### 5. Removing Elements
- Use .delete(key):
```js
map.delete('age');
console.log(map.has('age')); // false
```
- Use .clear() to remove all entries:
```js
map.clear();
console.log(map.size); // 0
```

### 6. Map Size
```js
map.set('a', 1);
map.set('b', 2);

console.log(map.size); // 2
```


### 7. Iterating Over Maps
- Using for...of
```js
const map = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```

- Using .forEach()
```js
map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
```

- Iterating keys, values, entries
```js
console.log([...map.keys()]);   // ['name', 'age']
console.log([...map.values()]); // ['Alice', 25]
console.log([...map.entries()]);// [['name','Alice'], ['age',25]]
```

### 8. Converting Between Map and Object
- Map → Object
```js
const obj = Object.fromEntries(map);
console.log(obj); // { name: 'Alice', age: 25 }
```

- Object → Map
```js
const obj2 = { a: 1, b: 2 };
const mapFromObj = new Map(Object.entries(obj2));
console.log(mapFromObj);
```

### 9. Using Objects and Arrays as Keys
```js
const map = new Map();
const objKey = { id: 1 };
const arrKey = [1, 2, 3];

map.set(objKey, 'Object value');
map.set(arrKey, 'Array value');

console.log(map.get(objKey)); // 'Object value'
console.log(map.get(arrKey)); // 'Array value'
```
- Note: Objects and arrays are stored by reference, not by value.

### 10. WeakMap
- A WeakMap is similar to Map but:
- Keys must be objects
- Keys are weakly referenced, meaning they don’t prevent garbage collection
- Cannot be iterated or checked for size
```js
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');

console.log(weakMap.get(obj)); // 'value'
```


### 11. Practical Examples
- Counting occurrences
```js
const arr = ['apple', 'banana', 'apple', 'orange', 'banana'];
const countMap = new Map();

arr.forEach(item => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap); // Map(3) { 'apple' => 2, 'banana' => 2, 'orange' => 1 }
```
- Storing object metadata
```js
const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };
const metadata = new Map();

metadata.set(user1, { lastLogin: '2025-10-03' });
metadata.set(user2, { lastLogin: '2025-10-01' });

console.log(metadata.get(user1)); // { lastLogin: '2025-10-03' }
```

### 12. Summary of Map Methods
| Method              | Description                                 |
| ------------------- | ------------------------------------------- |
| `new Map()`         | Create a new Map                            |
| `set(key, value)`   | Add or update a key-value pair              |
| `get(key)`          | Retrieve value by key                       |
| `has(key)`          | Check if key exists                         |
| `delete(key)`       | Remove key-value pair                       |
| `clear()`           | Remove all entries                          |
| `size`              | Number of entries                           |
| `keys()`            | Returns an iterator of keys                 |
| `values()`          | Returns an iterator of values               |
| `entries()`         | Returns an iterator of `[key, value]` pairs |
| `forEach(callback)` | Iterate over each key-value pair            |

### 
- Keys can be anything, not just strings.
- Maps maintain insertion order.
- Maps are iterable directly.
- WeakMaps allow objects as keys and are not enumerable.
- Converting between Objects and Maps is easy using Object.entries() / Object.fromEntries().


# Where Data can come from ? (Sources of Data):
1. From the program itself: Data written directly in source code (e.g. status messages)
2. From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3. From external sources: Data fetched for example from web API (e.g. recipe objects)
API - Application Programming Interface 
Data from APIS comes in JSON

### 1. JSON (JavaScript Object Notation)
- JSON is the most popular data format today, especially in web APIs.
- Structure: Objects {} and arrays []
- Data types: Strings, numbers, booleans, null, arrays, objects
- Human-readable: Yes, easy to read and write
- Parsing in JS: Easy with JSON.parse() / JSON.stringify()
- Example:
```js
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["Math", "Physics"]
}
```
- JS equivalent:
```js
const data = {
  name: "Alice",
  age: 25,
  isStudent: false,
  courses: ["Math", "Physics"]
};
```
- Most APIs use JSON today.


### 2. XML (eXtensible Markup Language)
- XML is an older data format, often used in enterprise systems and older APIs.
- Structure: Uses tags, like HTML
- Data types: Everything is text (you may need conversion)
- Human-readable: Yes, but more verbose than JSON
- Parsing in JS: Requires a parser like DOMParser

```xml
<user>
  <name>Alice</name>
  <age>25</age>
  <isStudent>false</isStudent>
  <courses>
    <course>Math</course>
    <course>Physics</course>
  </courses>
</user>
```
- Pros: Very flexible, supports schemas
- Cons: Verbose, harder to work with in JS

- Parsing in JS:
```js
const parser = new DOMParser();
const xmlString = `<user><name>Alice</name></user>`;
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
console.log(xmlDoc.getElementsByTagName("name")[0].textContent); // Alice
```


### 3. CSV (Comma-Separated Values)
- CSV is a simple table-like format, often used for spreadsheets, data export/import.
- Structure: Rows and columns, separated by commas (or other delimiters)
- Data types: Everything is text (numbers can be parsed)
- Human-readable: Yes, very simple
- Parsing in JS: Use .split() or libraries like PapaParse

<note>
name,age,isStudent
Alice,25,false
Bob,30,true
<note>

- JavaScript parsing:
```js
const csv = `name,age,isStudent
Alice,25,false
Bob,30,true`;

const rows = csv.split("\n");
const headers = rows[0].split(",");
const data = rows.slice(1).map(row => {
  const values = row.split(",");
  return Object.fromEntries(values.map((v, i) => [headers[i], v]));
});

console.log(data);
/*
[
  { name: "Alice", age: "25", isStudent: "false" },
  { name: "Bob", age: "30", isStudent: "true" }
]
*/
```
- Pros: Simple, easy to import/export to Excel
- Cons: No nested structures, limited data types

### Summary Comparison
| Feature       | JSON                   | XML                    | CSV                     |
| ------------- | ---------------------- | ---------------------- | ----------------------- |
| Structure     | Objects & arrays       | Tags & nested elements | Rows & columns          |
| Readability   | Good                   | Moderate (verbose)     | Good                    |
| Data types    | Native (number, bool…) | Text only              | Text only               |
| Nested data   | Yes                    | Yes                    | No                      |
| Common uses   | APIs, web, JS apps     | Enterprise, config     | Spreadsheets, exports   |
| Parsing in JS | `JSON.parse`           | `DOMParser`            | Split strings / library |


💡 Rule of thumb:
- If you’re working with modern web APIs → JSON
- If it’s a legacy system → XML
- If it’s tabular or spreadsheet data → CSV


- it doesnt matter from where it comes the (Collection of data) 
- -> we need to store it somewhere, so we use (Data Structures), but as we know they are 4 built in data structures in JS.
- So we need to decide what to choose and where to choose it

### Do we need a simple list of values ? If so - Arrays or Sets  (Values without any description)
### If we need value,key pairs, then - Objects or Maps (Keys allow us to describe values)

### Arrays = Use when you need ordered list of values (might contain duplicates); Use when you need to manipulate data;
```js
tasks = ['Code', 'Eat', 'Code']; // ['Code','Eat','Code']
```

### Sets = Use when you need to work with unique values; Use when high-performance is really important; Use to remove duplicates from arrays;
```js
tasks = new Set(['Code','Eat','Code']) // {'Code','Eat'}
```

### Objects = More "traditional" key/value store ("abused" objects); Easier to write and access values with . and [];
- Use when you need to include functions (methods)
- Use when working with JSON (can convert to map later IF neccessery)
- U can use .this keyword, which is impossible in Maps
```js
task = {
    task: 'Code',
    date: 'today',
    repeat: true
};
```

### Maps = Better performance; Keys can have any data type; Easy to iterate; Easy to compute size; 
- Use when you simply need to map key to values
- Use when you need keys that are not strings
```js
task = new Map([
    ['task','Code'],
    ['date','today'],
    [false, 'Start coding!']
]);
```

- Other Built-IN Data Structures - WeakMap, WeakSet
- Non-Built IN - Stacks, Queues, Linked lists, Trees, Hash tables
