let arr = ['a','b','c','d','e']

/// SLICE making a copy 
console.log(arr.slice(2));
console.log(arr.slice(2,4)); // 4 is not included (2,3)
console.log(arr.slice(-2)); // reversed gonna take 'd' and 'e'
console.log(arr.slice(-1)); // 'e'
console.log(arr.slice(1, -2)); // 'b' and 'c'
console.log(arr.slice()); // shallow copy
console.log([...arr]); // same result 

// SPLICE mutating the array
console.log(arr.splice(2)); // extracting from 2
console.log(arr.splice(-1));
console.log(arr); // arr now stays with the left letters
arr.splice(1, 2) // start at 1 and deletes 2 (without including) 

// REVERSE 
let arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse()); // mutate the array;
console.log(arr2);


// CONCAT 
arr = ['a','b','c','d','e'];
const letters = arr.concat(arr2)
console.log(letters); // or 
console.log([...arr, ...arr2]); // doesnt mutate


// JOIN 
console.log(letters.join(' - '));


// AT Method 
const arr3 = [23,11,64];
console.log(arr[0]);
console.log(arr.at(0));


console.log(arr[arr.length - 1]); 
// OR
console.log(arr.slice(-1)[0]); 
console.log(arr.at(-1));


console.log('jonas'.at(0));
console.log('jonas'.at(-1));




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [i, movement] of movements.entries()) {/// how to check counter variable in For..of loop
    if (movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`) 
    }
}


movements.forEach(function(mov, i, arr){  /// in forEach, the first value is currentElement, the second one is the Index
    if (mov > 0){
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`) 
    }
})

// 0 : function(200)
// 1 : function(450)
// 2 : function(400)
// ...
/// forEach cannot be broken, if u wanna break some statement, u need to use for..of



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
    
})


// Set
const currenctiesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
console.log(currenctiesUnique);
currenctiesUnique.forEach(function(value,key,map){
    console.log(`${key} : ${value}`);
})  // A set doesn't have keys, that's why it output is -> USD : USD, GBP : GBP

// underscore in JS : _ , means throwaway
// currenctiesUnique.forEach(function(value, _ ,map)






/// FIND METHOD is suppose to find just 1 element
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


console.log(movements.find(mov => mov < 0));
console.log(accounts);



const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account);


console.log(movements);

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);



// 'Your latest large movement was X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000)
console.log(latestLargeMovementIndex);

console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`);


/// Some and every


///SOME METHOD
console.log(movements);
/// Checks only for EQUALITY
console.log(movements.includes(-130));

/// CONDITION
console.log(movements.some(mov => mov === -130)); // doesnt make sense, thats why we use .includs

const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits);



/// EVERY METHOD
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));



///Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));



/// Flat and FlatMap
const arr = [[1,2,3], [4,5,6], 7,8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]], 7,8]
console.log(arrDeep.flat(2)); // second level of deepening


const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements);
const allMovements = accountMovements.flat()
console.log(allMovements);
const overallBalance = allMovements.reduce((acc,mov) => acc + mov, 0);
console.log(overallBalance);

/// OR easier

/// Flat
const overallBalance1 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc,mov) => acc + mov, 0);
console.log(overallBalance1);


// flatmap combines flat and map into just one method
// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)  /// flatmap method goes 1 level deep, if u need to use for deeper use the .flat method only 
  .reduce((acc,mov) => acc + mov, 0)





const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log(movements);


const deposits = movements.filter(function(mov){
  return mov > 0;
})

console.log(deposits);

const depositsFor = [];
for (const mov of movements){
    if (mov > 0 ){
        depositsFor.push(mov)
    }
}

const withdrawals = movements.filter(function(x){
    return x < 0;
})

const withdrawals1 = movements.filter(mov => mov < 0);
console.log(withdrawals);
console.log(withdrawals1);



console.log(movements);

/// accumulator -> SNOWBALL
const balance = movements.reduce(function(acc, currentElement, index, arr){
    console.log(`Iteration ${index} : ${acc}`);

    return acc + currentElement;
}, 0)
console.log(balance);


const balance1 = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance1);




let balance2 = 0;
for (const mov of movements){ balance2 += mov;};

console.log(balance2);


// Maximum value 
const max = movements.reduce((acc,mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0])
console.log(max);

/// OR

const max1 = movements.reduce((acc, mov) => {
     return (acc > mov ? acc : mov ?? 0);
}, movements[0])
console.log(max1);





