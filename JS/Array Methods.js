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
