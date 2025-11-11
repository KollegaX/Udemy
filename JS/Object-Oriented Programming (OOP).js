// OOP 
// Object oriented programming (OOP) is a programming paradigm based on the concept of objects ;
// We use objects to model (describe) real-world or abstract features
// Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;
// In OOP, objects are self-contained pieces/blocks of code;
// Objects are building blocks of applications, and interact with one another;
// Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;
// OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code").


// const user = {
//   username: 'jonas',
//   password: 'dk23s', // demo only — insecure in real apps
//   loggedIn: false,

//   login(password) {
//     if (password === this.password) {
//       this.loggedIn = true;
//       console.log(`${this.username} logged in`);
//       return true;
//     }
//     console.log('Login failed');
//     return false;
//   },

//   sendMessage(str) {
//     if (!this.loggedIn) {
//       console.log('Please log in first.');
//       return false;
//     }
//     console.log(`${this.username} sends: ${str}`);
//     return true;
//   }
// };

// // Usage:
// user.login('dk23s');          // -> "jonas logged in"
// user.sendMessage('hello :)'); // -> "jonas sends: hello :)"



/// CLASSES AND INSTANCES (TRADITIONAL OOP)
/// CLASS : Like a blueprint from which we can create new objects
// How do we actually design classes ? How do we model real-world data into classes ?
// The 4 fundamental principles of Object-Oriented Programming 
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// 1. Abstraction 
// Abstraction : Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
// Hiding this details from users.


// 2. Encapsulation 
// Encapsulation : Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API)
// Why? :
// Prevents external code from accidentally manipulating internal properties/state
// Allows to change internal implementation without the risk of breaking external code


// 3. Inheritance
// Inheritance : Making all properties and methods of a certain class available to a child class, forming a hierarchical realtionship between classes. This allows us to reuse common logic and to model real-world relationships.
// If 2 classes are closely related, we can inherite from the other (Parent class and child class),  child class extends the parent class


// 4. Polymorphism
// Polymorphism : A child class can overwrite a method it inherited from a parent class [it's more complex than that, but enough for our purposes]
// For example :
class User {
    login(password) {
        // Login logic
    }
}


// Own login method, overwriting login method inherited from user
class Admin extends User {
    login(password, key) {
        // DIFFERENT LOGIN
    }
}


/// Classical OOP : Classes
// Classes -(Instantiation)> Instaces
// Objects (instances) are instantiated from a class, which functions like a blueprint; 

/// OOP IN JS : Prototypes
// Prototype <- Object :
// Prototype object contains methods and properties, that all the objects are linked to that prototype can access and use ;
// Objects are linked to a prototype object;
// Prototype inheritance : The prototype contains methods (behavior) that are accessible to all objects linked to that prototype
// Behavior is delegated to the linked prototype object


// Example with Arrays :
// const num = [1,2,3];
// num.map(v => v * 2);
// in MDN is :
// Array.prototype.keys()
// Array.prototype.lastIndexOf()
// Array.prototype.map()

// Array.prototype is the prototype of all array objects we create in JavaScript. Therefore, all arrays have access to the map method!


/// 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT
// How do we actually create prototypes ? And how do we link objects to prototypes ? How can we create new objects, without having classes ?

/// 1. Constructor functions
// -> Technique to create objects from a function;
// -> This is how built-in objects like Arrays, Maps or Sets are actually implemented.

/// 2. ES6 Classes
// -> Modern alternative to constructor function syntax ;
// -> "Syntactic sugar": behind the scnes, ES6 classes work exactly like constructor functions;
// -> ES6 classes do NOT behave like calsses in "classical OOP" 

/// 3. Object.create()
// -> The easiest and most straightforward way of linking an object to a prototype object (not commonly used)

/// (The 4 pillars of OOP are still valid!) (-> Abstraction, -> Encapsulation, -> Inheritance, -> Polymorphism)


'use strict'; 
// 221. Constructor Functions and the new Operator!

/// arrow function will not work as a function constructor, because it doesnt have it's own this.keyword
const Person = function(firstName, birthYear) {
// console.log(this); // (empty object)

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER create method in a constructor function (Not good for the performance)
    // to solve this problem, we are gonna use prototypes and prototype inheritance
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);


// Behind the scenes 4 things are happening :
// 1. New {} is created
// 2. function is called, this = {} 
// 3. {} linked to prototype
// 4. function automatically return {} 

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2000);

const jay = 'Jay'

console.log(jack instanceof Person);
console.log(jay instanceof Person);

// Note : Function constructors are not really a feature of the JS language, instead they are simply a pattern that has been developed by other developers and now everyone simply uses this.






/// 222. Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
        console.log(2037 - this.birthYear);
};

jonas.calcAge()
matilda.calcAge()
jack.calcAge();
// This resolves the problem with the copied functions in class;

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


/// 223. Prototypal Inheritance and The Prototype Chain
// | Concept                | Meaning                                                  |
// | ---------------------- | -------------------------------------------------------- |
// | Prototype              | The object that another object inherits from             |
// | Prototypal Inheritance | Using properties and methods via the prototype           |
// | Prototype Chain        | The path JavaScript follows to look up a property/method |
// | End of the chain       | `Object.prototype` → `null`                              |


/// 224. Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,6,6,5,6,9,3]; // new Array === [];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);


/// Adding new method to the prototype (But not a good idea)(Fun experiment tho :} )
Array.prototype.unique = function(){
    return [...new Set(this)]
}
console.log(arr.unique());





/// 225. Exercise 1 :
const Car = function (make,speed) {
        this.make =  make ;
        this.speed = speed;
}

Car.prototype.accelerate = function (){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car ('BMW', 120)
const mercedes = new Car ('Mercedes', 95)


bmw.accelerate()
bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.brake()
bmw.brake()
bmw.accelerate()







/// 226. ES6 Classes
// Classes are still function (default)

// class expression
const PersonCl = class {}

// class declaration
class PersonCl1 {
    constructor (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge () {
        console.log(2037 - this.birthYear);
        
    }


    greet () {
        console.log(`Hey ${this.firstName}`);
    }
}

const jessica = new PersonCl1('Jessica', 1996)

console.log(jessica);
jessica.calcAge()

console.log(jessica.__proto__ === PersonCl1.prototype);

/// Adding method manually
PersonCl1.prototype.greet = function (){
    console.log(`Hey ${this.firstName}`);
}
jessica.greet()


// 1. Classes are NOT hoisted (u can't use them before they are declarated)
// 2. Classes are first-class citizens 
// 3. Classes are executed in strict mode




/// 227. Setters and Getters
// every object in JS can have : s... and g...

const account = {
    owner : 'jonas',
    movements : [200,530,120,300],
    
    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);




/// Classes do have Getters and Setters as well, and they work in the exact same way
class User1 {
    constructor (fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age () {
        return 2030 - this.birthYear
    }

    set fullName(name){
        console.log(name);
        
        if (name.includes(' ')) this._fullName = name;
        else console.log(`${name} is not a full name!`);   
    }

    get fullName(){
        return this._fullName;
    }
}

const user123 = new User1('Jessica Davis', 2005)
const walter = new User1('Walter White', 1965)
console.log(user123.age);
console.log(walter);






/// 228. Static Methods
Person.hey = function(){
    console.log(`Hey there`);
}
Person.hey() // jonas.hey can't inherit it
// this is the whole person constructor


class User2 {
    constructor (fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Static method
    static hey() {
        console.log(`Hey There`);
        
    }

}
User2.hey(); 






/// 229. Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
        
    },
    
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// Bad way
const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

// Better way
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979)
sarah.calcAge();




/// Exercise 2 :
// 1. Recreate challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter
// DATA CAR 1 : 'Ford' going at 120 km/h
class Car1 {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

        brake () {
        this.speed -= 20;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        }

            accelerate () {
            this.speed += 10;
            console.log(`${this.make} is going at ${this.speed} km/h`);
            }

                get speedUS () {
                return this.speed / 1.6; 
                }

                        set speedUS (speed) {
                        this.speed = speed * 1.6
                        }

}
const ford = new Car1('Ford', 120);
console.log(ford);
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50;
console.log(ford);




/// 231. Inheritance Between "Classes" : Constructor Functions 

const Person1 = function (firstName, year){
    this.firstName = firstName;
    this.birthYear = year;
};

Person1.prototype.calcAge = function (){
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // Person1(firstName,birthYear); // wouldn't work
    Person1.call(this, firstName, birthYear);
    this.course = course;
}

// Student.prototype = Person1.prototype; // This doesn't work at all
// give an empty prototype (but right to do) / Linking prototypes
Student.prototype = Object.create(Person1.prototype); // because now the prototype is pointing to Person1, to fix it we just :
Student.prototype.constructor = Student;


Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
    
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);



/// 232. Exercise 3 :
const Car2 = function (make,speed) {
        this.make =  make ;
        this.speed = speed;
}

Car2.prototype.accelerate = function (){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car2.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}


const EV = function (make,speed,charge) {
    Car2.call(this, make, speed) 
    this.charge = charge;
}

// Link the prototype
EV.prototype = Object.create(Car2.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
    
}


const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake()
tesla.brake()
tesla.brake()



// Let’s use a quick analogy 
// Imagine you’re setting up a “family tree”:

// SavingsAccount.prototype = Object.create(Example.prototype)
// → “Make SavingsAccount a child of Example.”
// (This sets up the family link — inheritance.)

// SavingsAccount.prototype.constructor = SavingsAccount
// → “But remember, SavingsAccount is its own person, not Example.”
// (This fixes the name tag on the child.)


/// 233. Inheritance Between "Classes": ES6 Classes
class PersonCL {
    constructor (fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    calcAge () {
        console.log(2037 - this.birthYear);
    }
    
    greet () {
        console.log(`Hey ${this.fullName}`);
        
    }

    get age () {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey () {
        console.log(`hey there`);
        
    }
}




class Student1 extends PersonCL {
    constructor(fullName, birthYear, course = 'no course'){
        // PersonCl.call() not need for that

        // Always needs to happen first!
        super(fullName, birthYear) // constructor function of the parent class, without it we cannot access the this. keyword
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
        
    }


    /// to overwrite for example the calcAge method, we just do a new one 
    calcAge (){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }

    // it comes first in the prototype chain, and that's why it doesn't take from the parent
}

const martha = new Student1('Martha Jones', 2012, 'Computer Science')
console.log(martha);
martha.introduce()
martha.calcAge()







/// 234. Inheritance Between "Classes" : Object.create();
const PersonPhoto = {
    calcAge () {
        console.log(2037 - this.birthYear);
    },

    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear
    }
}

const steven1 = Object.create(PersonProto);

const StudentProto = Object.create(PersonPhoto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}



const jake = Object.create(StudentProto);
jake.init('Jake', 2008, 'CS');
jake.introduce();
jake.calcAge();


console.log(10 * 500);



/// 235. Another Class Example :
class Account {
    constructor (owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account ${owner}`);
        

    }

    // Public interface
    deposit (val) {
        this.movements.push(val);
    }

    withdral (val) {
        this.deposit(-val)
    }

    approveLoan(val){
        return true;
    }


    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            
        }
    }
}


const acc1 = new Account('Jonas', 'EUR', 1111)

// acc1.movements.push(250);
// acc1.movements.push(-140);
    acc1.deposit(250);
    acc1.withdral(340);

console.log(acc1);
console.log(`PIN : ${acc1.pin}`);

console.log(acc1);

