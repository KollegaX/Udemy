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
const [p, q, r] = [8, 9];

/// we can do this :
const [p = 1, q =1, r =1] = [1,2];
console.log(p,q,r);



//// OBJECTS






