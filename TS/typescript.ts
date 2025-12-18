// on the official website - Typescript is JavaScript with syntax for types 
// Typescript is a JavaScript superset
// It's an "extension" to the JavaScript language
// The core syntax & features are the same but extra features are added
// MOST IMPORTANTLY : Strict & static typing
// example
function deriveFinalPrice(inputPrice: number) {
    const finalPrice = inputPrice + inputPrice * 0.19;
    return finalPrice;
}
console.log(deriveFinalPrice(+'23'));



// Why would u use Typescript
// Because it can speed ur development process and help u avoid unnecessary errors and bugs

/// Typescript doesn't run on the browser 
// - You can't Execute TypeScript Code, unless you're working with a runtime that has built-in Typescript support (e.g., Bun, Deno)
// to make it work in the browser, you need to compile it from Typescript to JavaScript
// in the original website of TS, there is download process with instructions
// npm is a package manage which comes with node.js
// npm install -g typescript (you need to have node.js installed)

/// About the course in TypeScript
// Essentials :
// Assigning & Inferring Types
// Built-in Types & Essential Types
// Custom Types
//     |
//     |
// Advanced :
// Classes & Interfaces
// Generic & Derived Types
// Decorators


// TypeScript Essentials :
// Basic Built-in Types
// Object & Array Types
// Function Types
// Custom Types
// Special Types


// type assignments :
// let userName; // lets say the username is not initialized and then we type some code
// // ...
// userName = 'Max';
// // but its not taking advantage of TS

// // colon and the name of the type of value which is expected of this value, if u want to have string
// let user: string; // lower case is the correct one, but u won't get error for typing it : String (like this)
//         // : boolean;
//         // : number;



// let userAge: number = 38; // but do not do type it explicitly


// function add(a: number, b = 5) {
//     return a + b;
// }
// add(10)


// flexible-types
let age: any = 36;
age = '37'; // error, if not the type is : any
age = false;
age = {};
age = [];

// if we want the variable be either String or a Number, we can do :
let age1 : string | number = 36; // or add many as u need.



// Arrays & Objects
let hobbies =  ['Sports', 'Cooking'];
// hobbies.push(10); // can't because its array of Strings.

// and we can manually type what it should be ;
let hobbies1 : string[] = ['Sports', 'Cooking'];


let user1 : string[]; // and to do that the array should hold either string or a number 
let user2 : (string | number)[];

user2 = [1, 'max']
user2 = [5,1];
user2 = ['Max', 'Anna']

// and instead of using the square brackets, u can type the Array differently
// generic type (advanced feature);
let user3: Array<string | number>;

// tuple type
let possibleResults: number[] // [1, -1]

possibleResults = [1, -1];
possibleResults = [5, 10, 12];

// tuple cna mean a fixed-length array with more than two elements - TypeScript tuples can be of any lenght needed.
let possibleResult: [number, number]; // [1, -1]
possibleResult = [1, -1];
// possibleResult = [5, 10, 12]; // error / rejected



/// Object Types
let _user = {
    name : 'Max',
    age : 38
}


// we can do a type definition by :
let __user: {name : string; age: number | string; hobbies: string[]; role: {description : string; id : number}} = {
    name: 'Max',
    age: 38,
    hobbies: [],
    role : {
        description : 'a',
        id : 2
    }
}


// tricky: The "Must Not Be Null" Type
let val : {} = 'some text'; // this means : any value that is not undefined || null
const someObj = {};


// Flexible Objects with the Record Type
// Record<string, number | string> means an object with string keys and values that can be either numbers or strings. For example: { entry1: 1, entry2: 'some string' } is valid.
let data : Record<string, number | string>; 
data = {
    entry1 : 1,
    entry2 : 'some string'
}


// Working with Enums (from TypeScript)
enum Role { // or writing it in 1 line
    Admin, // 0
    Editor, // 1
    Guest, // 2 
} // u can assign them so they don't start from 0, but from 1 doing Admin = 1, and the rest is auto-piloting with 2 and 3
// instead of doing like let userRole = 0 // 0 for Admin, 1 for Guest, we can do it with Enum
let userRole: Role = Role.Admin; 
// ...
userRole = Role.Guest

// in JS would be 
// var Role;
// (function (Role) {
//     Role[Role['Admin'] = 0] = 'Admin';
//     Role[Role['Editor'] = 1] = 'Editor';
//     Role[Role['Guest'] = 2] = 'Guest';
// })
// var userRole = Role.Admin; // (which is kinda hard)


// Being Specific With Literal Types
// A literal type means a variable can only hold specific values.
// Instead of saying string (any string is allowed), you say exactly which strings are allowed.
let userRole1 : 'admin' | 'editor' | 'guest' = 'admin' ;

// ...

userRole1 = 'guest'


// Type Aliases & Custom Types
// type // typescript keyword
type Role1  = 'admin' | 'editor' | 'guest' | 'reader'
let userR : Role1 = 'admin';


// dealing with Object types
type User = {
    name : string,
    role: Role;
    permission: string[];
}


// Functions in TypeScript (Function Return Value Types)
function _add (a: number, b : number) {
    return a + b;
}

function _add1 (a: number, b : number) : number {return a + b}

// you can add another type value before the curly brackets like function _add (a: number, b : number) : number {}, which will be the return value type of that function




// the "void" Type
function log(message: string): void{
    console.log(message);
}
// void means nothing, so simply this function returns nothing
// void is mostly used for function return types.
// Variables can technically be undefined or null, but usually void is just for function returns.



// the "never" Type
function logAndThrow(errorMessage : string) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// the return function is void, but u can override it to : never
// Used for functions that never finish normally.
// Examples:
// Functions that always throw an error
// Functions with infinite loops
// never means this function will never produce a value.
// TypeScript uses it to catch unreachable code.

// | Type    | Meaning                                  | Example                                        |
// | ------- | ---------------------------------------- | ---------------------------------------------- |
// | `void`  | Function returns nothing (undefined)     | `function log(): void {}`                      |
// | `never` | Function never returns (throws or loops) | `function fail(): never { throw new Error() }` |

// void = nothing returned
// never = will never return




const logMsg = (msg : string) => {
    console.log(msg)
}


// Functions As Types
// u can type it (cb : Function)
function performJob(cb: (m : string) => void) {
    // ...
    cb('Job Done!')
}
performJob(logMsg)


type User1 = {
    name : string;
    age : number;
    greet : () => string;
}

let users1: User1 = {
    name : 'Max',
    age : 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}
users1.greet()




// null & undefined - Special Types
let a : null;
a = null;
// a = 'hi!' // error

// so if u had a string initially but want to clear it, u can do
let b : null | string ;
b = 'Hi';
// ...
b = null // taken advantage of it



// Inferred null & A First Look At Type Narrowing
// TypeScript infers the type as HTMLElement | null.
// That’s because the element might not exist in the DOM.
// Accessing inputEl.value directly gives an error because value doesn’t exist on HTMLElement and inputEl could be null.

const inputEl = document.getElementById('user-name') as HTMLInputElement;
// if (!inputEl) {
//     throw new Error('Element not found!');
// }
console.log(inputEl!.value);
// The ! after inputEl tells TypeScript “trust me, this is not null”.
// - Works if you are 100% sure the element exists.
// - Will throw a runtime error if the element doesn’t exist.

// Accessing .value:
// If inputEl is an <input> element, TypeScript still sees it as HTMLElement.
// You may need a type cast to HTMLInputElement to access .value:
// const inputEl = document.getElementById('user-name')! as HTMLInputElement;
// console.log(inputEl.value);

// Forced "Not Null" And Optional Chaining
// doing const inputEl = document.getElementById('user-name')!; // the ! after the ()!
// u can use it of course where u use it, for example console.log(inputEl!.value);
// or using a question mark inputEl?.value (JS)
// console.log(inputEl?.value);
// This is pure JS.
// If inputEl is null, it returns undefined instead of throwing an error.
// Safe, but .value might be undefined if the element is missing.

//The ! is correct and tells TypeScript "not null."
// Use with caution, because it does not prevent runtime errors.
// Combine with as HTMLInputElement if you need .value.



// The "unknown" Type
// unknown is a type-safe version of any.
// You can assign any value to unknown, but you cannot use it directly without type checks.
// This forces you to verify the type before accessing properties or calling methods.

// if u get some data from an API or something like that, u can use the unknown type, sure u can strict type : number | string and any if u want
// the unknown makes u to add extra checks if something exists or not
function process(value : unknown) {
    if (typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function')
    val.log()
}

// unknown = “I don’t know the type yet, check it before using.”
// any = “I don’t care, just let me do whatever.”

// any     = no type checking, unsafe
// unknown = type-safe any, must check type before using
// never   = represents “no value ever” (function never returns)





// Optional Values & TypeScript
function generateError(msg?: string){
    throw new Error(msg)
}
generateError()

type us_er = {
    name: string;
    age : number;
    role? : 'admin' | 'guest';
}


// Nullish Coalescing
let input = '';
const didProvideInput = input ?? false; // searching for null and undefined














// to configure how typescript will behavior :
// tsc --init, then it creates a typescript configuration file

// strict → always true (Turns on all important type checks)
// target → modern JS (JS version TypeScript outputs)
// outDir / rootDir → clean project (Where compiled JS goes, Where TS source files live)
// moduleResolution: node (How imports are resolved (Node-style))
// esModuleInterop: true (Makes import express from 'express' work)


// Besides configuring compilation & type checking, you can also use the tsconfig.json file to enable some "quality of life" checks - checks that are not directly related to types but that can help you improve your code quality.
// {
//   "noUnusedLocals": true, // helps you detect unused variable
//   "noUnusedParameters": true, // helps you detect unused function parameters
//   "noFallthroughCasesInSwitch": true // helps you detect switch cases without break or return
// }


// Example tsconfig.json & Deep Dive
// The tsconfig.json file can be scary! Over all those years, dozens of options and settings have been added - and trying to make sense of them all is almost impossible.

// Thankfully, you really don't need to understand them all, though!

// Very often, you'll be working in a project created with build tools like Vite which create a fitting tsconfig.json file for you.

// If you DO want to understand some of the settings you see in those generated tsconfig.json files, the official reference can be helpful.

// And if you need a basic tsconfig.json file because you're working in a project that doesn't come with one, you can consider using this one (also available here and described in greater detail here):

// {
//   "target": "ES2022", // Good for modern browsers or Node.js
//   "compilerOptions": {
//     "esModuleInterop": true, // Ensures ESM and CJS imports work together well
//     "skipLibCheck": true, // Ensures .d.ts files from 3rd libraries are not type-checked
//     "target": "es2022", // Sets a relatively modern ECMAScript version as compilation target
//     "allowJs": true, // Allows importing .js files into .ts (helpful when migrating projects)
//     "strict": true, // Ensures strict type checking (i.e., noImplicitAny etc)
//     "noUncheckedIndexedAccess": true, // Adds undefined as a value when accessing by index
//     // "noImplicitOverride": true, // Enable this when working with classes & inheritance
//     "noUnusedLocals": true, // to avoid unused variables
//     "module": "NodeNext", // Supports both ESM & CJS modules / imports
//     "outDir": "dist", // Store compiled files in "dist" folder
//     "sourceMap": true, // Enables source maps for easier debugging
//     "lib": ["es2022", "dom", "dom.iterable"] // Or without "dom" libs when building for Node
//   }
// }
// The above configuration will likely NOT work when using third-party build tools or bundlers - but, again, if you are using such tools, you'll typically also use them or some helper tools to create projects with a pre-defined tsconfig.json file.


// to compile the ts file in a modern js file just simply type : (tsc) when compiling
// u can run tsc --watch (it will watch ur file and every time u save a change it saves into the js file)(retrigerring a compilation)



// data :
// initial amount
// annual conribution
// expected return
// duration

type InvestmentData = {
    initialAmount : number,
    annualContribution : number,
    expectedReturn : number,
    duration : number;
};

type InvestmentResult = {
    year : string,
    totalAmount : number,
    totalContributions : number,
    totalInterestEarned : number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data : InvestmentData): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;

    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero.'
    }

    if (duration <= 0) {
        return 'No valid amount of years provided.'
    }

    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.'
    }


    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++){
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year : `Year ${i + 1}`,
            totalAmount : total,
            totalInterestEarned : totalInterestEarned,
            totalContributions
        })
    }


    return annualResults;
}

function printResults(results : CalculationResult){
    if ( typeof  results === 'string'){
        console.log(results);
        return;
    }

    for (const yearEndResult of results){
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`)   
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`-----------------------------`);
        
    }
}

const investmentData : InvestmentData = {
    initialAmount : 5000,
    annualContribution : 500,
    expectedReturn : 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData)

printResults(results)



