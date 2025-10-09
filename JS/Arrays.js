const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter']
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);
/// friends = ['Bob','Alice'] - we cannot do that;

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; /// we can put other arrays in an array;
console.log(jonas);
console.log(jonas.length);


//// EXERCISE:
const calcAge = function (birthYear)
 {
  return 2037 - birthYear;
 }

 const years = [1990,1967,2002,2010,2018];

 /// what we cannot do is calcAge(years); we can't number - array;
 /// we can't do operations with arrays;
/// but we can do this ;}
 for (let i = 0; i < years.length; i++){
   console.log(calcAge(years[i]));
 }

 /// OR

 const age1 = calcAge(years[0]) /// and so on
 




let julia = [3,5,2,12,7]
let kate = [4,1,15,8,3]

function checkDogs(a,b){
    let copyA = a.slice(1,-2);
    let connected = copyA.concat(b);
    connected.forEach(function(a, index){
    let ca = a > 3 ? `Dog number ${index + 1} is an adult, and is ${a} years old` : `Dog number ${index + 1} is still a puppy`;
        console.log(ca);

  })

}
checkDogs(julia,kate)


/////////////////////////////////////////////////////////////////////////////////
// Map Method
// The `map()` method creates a new array by applying a provided callback function 
// to each element of the original array.
// It does not modify the original array.
// Example:
//   const array = [3, 1, 4, 3, 2];
//   const result = array.map(current => current * 2);
//   // Output: [6, 2, 8, 6, 4]
// In short, `map()` transforms each element and returns a new array.

// Filter Method
// The `filter()` method returns a new array containing only the elements 
// that satisfy a specified condition.
// Example:
//   const array = [3, 1, 4, 3, 2];
//   const result = array.filter(current => current > 2);
//   // Output: [3, 4, 3]
// In short, `filter()` selects specific elements from the original array 
// based on a test condition.

// Reduce Method
// The `reduce()` method executes a reducer function on each element of the array, 
// resulting in a single accumulated output value.
// Example:
//   const array = [3, 1, 4, 3, 2];
//   const result = array.reduce((acc, current) => acc + current, 0);
//   // Output: 13
// In short, `reduce()` combines all array elements into one value (e.g., sum, average, etc.).

// let arr = [3,1,4,3,2];
// console.log(arr.reduce((a,b) => {
//     let sum = a + b;
//     return sum
// }));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementsUSD = movements.map(function(mov){
    return mov * eurToUSD;
})

console.log(movementsUSD);
console.log(movements);

// OR

const movementsUSDfor = [];
for (const mov of movements){
    movementsUSDfor.push(mov * eurToUSD);
}
console.log(movementsUSDfor);


const movementsDescription = movements.map((mov,i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)}`)
console.log(movementsDescription);


for (let i = 0; i < movementsDescription.length; i++){
    let splitted = movementsDescription[i].split(' ');
    if (splitted[3] === 'deposit'){
        console.log(`${splitted[0]} +${splitted[4]}`);
    } else {
        console.log(`${splitted[0]} -${splitted[4]}`);
    }
}
