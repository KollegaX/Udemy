// Strings
const owners = ['Jonas','Zach','Adam','Martha'];
console.log(owners.sort()); // sort mutates the array
console.log(owners);


// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort()); // does not work


// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});
console.log(movements);

// Descending
movements.sort((a,b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});
console.log(movements);



// or easier and the same

movements.sort((a,b) => a - b);
console.log(movements);

// or 

movements.sort((a,b) => b - a);
console.log(movements);


