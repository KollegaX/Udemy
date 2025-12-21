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




// TypeScript & Modern JavaScript
// Basic Modern JavaScript Syntax Knowledge
// How TypeScript May Convert Syntax
// (TypeScript is helping run JavaScript in much older browsers)



// Default function Parameters
const add = (a : number, b : number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('.button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5))


// The Spread Operator (...)
const _hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(..._hobbies)

const person = {
    firstName : 'Max',
    _age : 30 
}

const copiedPerson = person; // reference
const _copiedPerson = {...person}; // copied





// Rest Parameters

const add1 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add1(5, 10, 2, 3.7)
console.log(addedNumbers);




// Array & Object Destructuring
const _hobby1 = _hobbies[0];
const _hobby2 = _hobbies[1];
const [hobby1, hobby2, ...remainingHobbies ] = _hobbies;


const {firstName, _age} = person; // this have to be the properties/names from the objects, u can't imagine names like in arrays, but u can change the variable from example (firstname) to (userName) through a colon {firsName : userName, _age} = person;




/// CLASSES & INTERFACES
// Creating & Using Classes
// Constructor Functions & Properties
// Methods
// Inheritance
// Interfaces


// What are Classes ? - they exist in vanilla JS2 (Classes are blueprints for objects)
// the idea is to create Class definition once and create multiple object instances based of this class
// so that we will have multiple objects that have the same shape, the same methods, but different data/value


// class _User {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// new _User('bro',12)

// Alternative version of classes so it doesnt be harder from JS (shortcut)
class _User {
    constructor(public name: string, public age?: number) { }
}
const jon = new _User('Jon Jones', 20);
const fred = new _User('Fred', 29);
console.log(jon,fred)



// public and private 
// there is also (protected), which works like private but also makes sure that the property may be accessed in classes that inherit the given class
class Admin {
    #role = 'ADMIN'; // you can use the JS private property in TS as well

    public hobbies : string[] = [];

    constructor(public name: string, public age: number){}

    greet(){
        console.log(`My age :` + this.age);
        
    }
}
const maximiliam = new Admin('Max',29);
maximiliam.age = 37




// READONLY keyword
class Read {
    readonly hobbies: string[] = [];
}
// readonly can be accessed, it's like public but can't be changed, only read
// if the readonly is a string, u can use the .push() method, because it mutates the existed one




// Understanding Getters 
class US_R {
    constructor(private firstName: string, private lastName: string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}
const max1 = new US_R('Max', 'Schwarzmüller');
console.log(max1.fullName);
// u define it like a property, u don't try to access it like a method




// Setting Values with Setters
class U_SER {
    private _firstName: string = '';
    private _lastName : string = '';

    set firstName(name: string){
        if(name.trim() === ''){
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
        set lastName(name: string){
        if(name.trim() === ''){
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }


    get fullName(){
        return this._firstName + ' ' + this._lastName;
    }
}


// Understanding Inheritance
class Employee extends U_SER {
    constructor (public jobTitle: string) {
        super();
        // super.firstName = 'Max';
    }

    work() {
        // ...
    }
}




// THE "PROTECTED" MODIFIER 
// protected is an access modifier.
// It controls where a property or method can be used.
// Rule of thumb:
// protected = usable inside the class and its subclasses, but NOT outside


// 1. Inside the class
// Code written inside the same class where the member is declared.
// The class can freely use its own protected properties and methods.


// 2. Inside a subclass (child class)
// Code written inside a class that extends another class.
// A subclass inherits the protected members from its parent, so it can use them as if they were its own.


// 3. Outside the class
// Any code that is not inside the class or its subclasses
// (for example: objects, functions, or files using the class).
// Even if you create an object of the class or subclass, you cannot access protected members directly.


// Inside class → can access
// Inside subclass → can access
// Outside (object or other code) → cannot access




/// Making Sense Of Abstract Classes
// used as Base class, that is not used/duplicated but extended
abstract class UIElement {
    constructor (public identifier : string) {}

    clone (targetLocation: string) {
        // logic to duplicate the UI element
    }
}
class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right'){
        super(identifier)
    }
}




// Interface :
// Object type definitions & contracts that can be implemented by classes
interface Authenticatable {
    email : string;
    password : string;

    login(): void;
    logout(): void;
}

let user: Authenticatable;

user = {
    email: 'test@example.com',
    password: 'abc1',
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout(){}
}


// Interfaces vs Type Aliases & Understanding Declaration Merging

// u could've instead using interface, just create a type keyword instead of interface
// why to use interface ?
// when u want to add something to the interface, the interface merges and it doesnt show an error
// You use interface when you expect the shape to be extended or merged later. (it comes to personal preference)


// A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.
// For example, you might want to define the type of a sum function that takes two numbers as input and returns their sum.
// You could write this code:

type SumFn = (a: number, b: number) => number; // function type
let sum: SumFn; // making sure sum can only store values of that function type
sum = (a, b) => a + b; // assigning a value that adheres to that function type

// Alternatively, you can also define the SumFn type via an interface:
interface SumFn1 {
  (a: number, b: number): number;
}
// It's up to you which alternative you prefer.
// Typically, you'll encounter the first version (type SumFn) more often but it's worth knowing about the alternative, too.




// Implementing Interfaces
// u can use them in conjunction with classes
class AuthenticatableUser implements Authenticatable{
    constructor(
        public userName: string,
        public email: string, 
        public password: string) {
    }

    login() {

    }

    logout() {
        
    }

}

// Extending Interfaces
interface AuthenticatableAdmin extends Authenticatable {
    role : 'admin' | 'superadmin';
}
// interfaces is pure typescript feature and does not exist in JS and gets compiled away.






/// Advanced TypeScript Usage
// Intersection Types

type FileData = {
    path: string;
    content: string;
}

type DataBaseData = {
    connectionUrl : string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;

}

// intersection (combination of those 2)
type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DataBaseData & Status
// or with interfaces
interface AccessedFileData1 extends FileData, Status {}
interface AccessedDatabaseData1 extends DataBaseData,Status {}




// More on type Guards
type FileSource = {path: string};
const fileSource : FileSource = {
    path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string};
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};


type Source = FileSource | DBSource;

function loadData(source: Source) {
    //Open + read file OR reach out to database server
    if ('path' in source){
        // source.path; => use that to open the file
        return;
    }
    // source.connectionUrl; => to reach out to database
}





// Discriminated Unions
type FileSource1 = {type: 'file'; path: string};
const fileSource1 : FileSource1 = {
    type: 'file',
    path: 'some/path/to/file.csv',
};

type DBSource1 = { type: 'db'; connectionUrl: string};
const dbSource1: DBSource1 = {
    type: 'db',
    connectionUrl: 'some-connection-url',
};

type Source1 = FileSource1 | DBSource1;

function loadData1(source: Source1) {
    if (source.type === 'file'){
        source.path
        // source.path; => use that to open the file
        return;
    }
    source.connectionUrl
    // source.connectionUrl; => to reach out to database
}








/// Type Guards via "instanceof"
// instanceof is another way of finding with which kind of value we're working
class USER {
    constructor(public name: string){}

    join() {
        // ...
    }
}

class ADMIN {
    constructor(permissions: string[]) {}

    scan() {
        // ...
    }
};
const user_ino = new USER('Max');
const admin_ino = new ADMIN(['ban','restore']);

type Entity = USER | ADMIN;

function init(entity: Entity){
    if (entity instanceof USER){
        entity.join();
        return;
    }

    entity.scan();
};





/// Outsourcing Type Guards & Using Type Predicates
function isFile(source: Source1){
    return source.type === 'file';
}
// source is FileSource is a boolean but with extra information attached to it






/// Function Overloads
// depending on which definition, we can tell if we become an array it's return is gonna be a number and for the string, it comes out as a String
function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
    // return val.length; // X words
    if (typeof val === 'string'){
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numOfWords = getLength('does this work?')
numOfWords.length;
const numItems = getLength(['Sports', 'Cookies'])





/// Making Sense of Index Types
// 1. Objects can have unknown property names
// Index types exist because not all object keys are known ahead of time.
// TypeScript allows object types where keys are not predefined.

// Index types allow any number of properties, including none.
// All property keys must match a single key type (usually string).
// All property values must conform to a single value type.
// The rule applies to every property, even those added later.
// Type checking happens when properties are assigned, not at runtime.
// Any explicitly defined property must be compatible with the index signature.
// Index types are best suited for dictionary-like / map-like objects, not fixed data structures.
type DataStore = {
    [prop: string] : number | boolean;
};

let store: DataStore = {};
store.id = 5;
store.isOpen = false;







/// Constant Types with "as const"
let roles = ['admin', 'guest', 'editor'] as const; // TypeScript feature 
// roles.push('max') // its not allowed, because it must not be edited;
const firstRole = roles[0];




// Revisiting the "Record" Type
let oneObj: Record<string, number | string>;




// The `satisfies` keyword checks a value against a type
// WITHOUT changing the inferred type of that value.

// Without `satisfies` — type is widened
const widened: Record<string, number> = {
  entry1: 0.51,
  entry2: -1.23,
};

// Allowed, but unsafe (key does not exist at runtime)
widened.entry3;


// With `satisfies` — type is validated but NOT widened
const exact = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// Allowed — exact keys are known
exact.entry1;
exact.entry2;

// Compile-time error: Property 'entry3' does not exist
// exact.entry3;


// `satisfies` still enforces value types
const invalid = {
  entry1: 0.51,
  // entry2: "wrong", // Type error: string is not assignable to number
} satisfies Record<string, number>;







/// Generics :
// What & Why ?
// Creating & Using Generic Types
// Generic Constraints
// A generic type we already know :
let names: Array<string> = ['Max','Anna']; // or : string[]




// Understanding Generic Types
// types that need to work together with other types in order to accuratly describe a certain value type (combination of types, for example : Array<string> (the one is Array, the other is String))




// Creating & Using a Generic Type
type DataStore1 = {
    [prop: string] : string | number; 
}
let store1: DataStore1 = {};
store1.name = 'Max';
// store1.isInstructor = true; // gives us an error because its accepted string and number, thats why we can do it into a generic type so it can be more flexible

type DataStore2<T> = { // T for Type or multiple placeholders <T, U>
    [prop: string] : T; 
}
let store2: DataStore2<string | boolean> = {};
store2.name = 'Max';
store2.isInstructor = true;
let nameStore : DataStore2<string> = {};





// Generic Functions & Inference
function merge(a: any, b: any) {
    return [a,b];
}
const ids = merge(1,2);
// ids[0]. //typescript doesnt know what value it is (if number/string)

// where generic features can help us (we can turn this function into generic one)
function _merge<T>(a: T, b: T){
    return [a,b];
}
const ids1 = _merge<number>(1,2); // or we can remove it, so it looks like :
// const ids1 = _merge(1,2); // because TypeScript looks at the inputs and returns number






// Working with Multiple Generic Parameters
// if we want users to allow users to pass in different kinds of values 
function __merge<T,U>(a: T, b: U){
    return [a,b];
}
const _ids = __merge<number, string>(1,'Max');






// Generics & Constraints

function mergeObj(a : any,b : any){ // not ideal to use :any
    return {...a, ...b};
}
const merged = mergeObj(1,2);
console.log(merged) // u will see an empty object



// what we can do is turn it into a generic function
// Constraint using `extends`
// T must have an `id` property
function _mergeObj<T extends object>(a: T, b: T){ // we add a constraint "extends" (it should be some type of object if its set to object)
    return {...a , ...b};
}
const _merged = _mergeObj({username: 'max'}, {age: 35});



// Generic Types
// Generics are placeholders for types that allow you to write reusable, type-safe code. They let you define a type, interface, or function that can work with any type, while preserving type information. Generics provide flexibility without losing the benefits of static type checking.


// Constraints
// Constraints are rules applied to generics to restrict the types that can be used. Using constraints, you can ensure that a generic type has certain properties or extends a specific base type. This allows you to write flexible code while preventing invalid types from being used, maintaining type safety.


// Multiple Generics
// Multiple generics allow you to define more than one type parameter in a type, interface, or function. Each type parameter can represent a different type, which allows you to combine, transform, or relate multiple types in a single definition.


// Combining Constraints and Multiple Generics
// You can apply constraints to one or more generic type parameters simultaneously. This ensures that each generic type adheres to specific requirements while still allowing flexibility and composability. It is particularly useful for operations that involve multiple types interacting with each other.


// Mental Model
// Generics = type placeholders for flexibility
// Constraints = limits or requirements on the types that can be used
// Multiple generics = handling multiple flexible types together
// Combining constraints + multiple generics = flexible yet safe designs for complex type relationships



// Working with Generic Classes & Interfaces
class __User {
    constructor(public id : string | number | object) {

    }
} // good place to turn this class into a generic


class ___User<T> {
    constructor(public id : T) {

    }
}
const _user1 = new __User('i1');
_user1.id

// or we can build generic interfaces :
interface _Role<T> {
    // ...
}
