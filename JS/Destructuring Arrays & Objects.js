/// ARRAYS 
const arr = ['asd',3,4];
const [x,y,z] = arr;
console.log(y);
const [first, ,third] = arr;
console.log(third);
let one = ['Italian', 'Russian'];
let [main, secondary] = one;
console.log(main, secondary);
[main, secondary] = [secondary,main];
console.log(main,secondary);


const restaurant = {
    name : 'Classico Italiano',
    location : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza','Pasta','Risotto'],

    order : function(startIndex, mainIndex){
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    }
}

console.log(restaurant.order(2,0));

const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse);

const nested = [2,4, [5,6]];
const [i, ,j] = nested;

/// Destructuring a nested array
const [a, , [b, k]] = nested;
console.log(a, b,k);


/// Default value
// const [p, q, r] = [8, 9];

/// we can do this :
const [p = 1, q =1, r =1] = [1,2];
console.log(p,q,r);



/// OBJECTS

const restaurant1 = {
    name : 'Classico Italiano',
    location : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza','Pasta','Risotto'],
    openingHours : {
        thu : {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close : 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    
    },

    order : function(startIndex, mainIndex){
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery : function ({startIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

restaurant1.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    startIndex: 2,
})

/// Because we did default value :
restaurant1.orderDelivery({
    address: 'Via Del Sole, 21',
    startIndex: 1,
})


const {name, openingHours, categories} = restaurant1;
console.log(name, openingHours, categories);

/// New variable names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant1;
console.log(restaurantName, hours, tags);


/// How to make default values: (Default Values)
const { menu = [], startMenu: starters = []} = restaurant1;
console.log(menu, starters);


/// Mutating variables
let aa = 111;
let bb = 999;
const obj = {aa : 23, bb: 7, cc: 14};

console.log(aa, bb);

// {aa, bb} = obj; // it doesnt work that way, but if the whole code is in -> () - then it should work; - wrapping
({aa,bb} = obj);
console.log(aa, bb);


/// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);
