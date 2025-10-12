// My try
function calcAverageHumanAge(input){
    let dogAge = input;
    let humanAge = [];

    for (let i = 0; i < dogAge.length; i++){
        if (dogAge[i] <= 2){
            humanAge.push(2 * dogAge[i]);
        } else if (dogAge[i] > 2){
            humanAge.push(16 + dogAge[i] * 4);
        }
    }
    let filtering = humanAge.filter(humanAge => humanAge > 18)
    let average = filtering.reduce((acc, mov) => (acc + mov)) / filtering.length
    console.log(average);
}
calcAverageHumanAge([5,2,4,1,15,8,3])

// OR

// video
const calcAverageHumanAge1 = function(ages){
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18)
    const average = adults.reduce((acc,age) => acc + age, 0) / adults.length;
    // OR
    // const average = adults.reduce((acc,age) => acc + age / adults.length, 0) ;
    
    console.log(average);
    
}
calcAverageHumanAge1([5,2,4,1,15,8,3])



/// PIPELINE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc,mov) => acc + mov, 0);

console.log(totalDepositsUSD.toFixed(0));


// Chaining Methods 
const calcAverageHumanAge2 = ages => ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc,age) => acc + age / age.length);

calcAverageHumanAge2([5,2,4,1,15,8,3])
