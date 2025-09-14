let jessica1 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27
}

function marryPerson(originalPerson, newlastName){
    originalPerson.lastName = newlastName;
    return originalPerson;
}



const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bob']
};

console.log(jessica);



// What we can actually do to copy a Object is :
// We can change for example the lastName, firstName or whatever but if we change the Array (because arrays are objects) in it, it changes in the first one as well
const copyJessica = {...jessica}
copyJessica.age = 30;

copyJessica.family.push('Mary')
copyJessica.family.push('John')

console.log(copyJessica.family);


// When you copy an object using the spread operator ({...obj}), it creates a 'Shallow copy'. This means that only the top-level properties are copied. If the object contains nested objects or arrays (like the family array), those are still shared between the original and the copy. So, changes to those nested values in the copy will also affect the original.




// How to Fix It (Deep Copy):
// If you want to create a true independent copy, you'll need to do a deep copy:

const deepCopyJessica = {
    ...jessica,
    family: [...jessica.family]  // Create a new array
};
deepCopyJessica.family.push('Sarah');
console.log(jessica.family);       // ['Alice', 'Bob']
console.log(deepCopyJessica.family); // ['Alice', 'Bob', 'Sarah']


/// OR for (Deep Copy) :
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Jim Carrey');
jessicaClone.family.push('John Travolta')

console.log(jessicaClone.family);
