//// code that can be reused over and over again
function logger(input){
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
console.log(fruitProcessor(5,0));


const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
