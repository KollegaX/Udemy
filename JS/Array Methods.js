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
