const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']
];

console.log(jonasArray);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};


console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

/// it doesnt work with the dot notation (ONLY FOR BRACKET NOTATION)
// console.log(jonas.'last' + nameKey);


// const interestedIN = prompt('What do you want to know about Jonas? Choose between firstName,lastName, age, job, and friends')
// console.log(jonas[interestedIN]); /// for example JOB and it will log the job - 'teacher'
// if (jonas[interestedIN]){
//     console.log(jonas[interestedIN]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);



console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);
/// Member Acess : .
/// Computed Member Access : [...]


const jonass = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${jonass.calcAge()} old ${jonass.job}, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license`
    }
};

console.log(jonass.calcAge());
console.log(jonass.age);


// console.log(`${jonass.firstName} is a ${jonass.age} old ${jonass.job}, and he has ${jonass.hasDriversLicense === true ? 'a' : 'no'} driver's license`);

console.log(jonass.getSummary());








////EXERCISE BMI :p
let mark = {
fullName : 'Mark Miller',
mass : 78,
height : 1.69,

calcBMI : function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
}

let john = {
fullName : 'John Smith',
mass : 92,
height : 1.95,

calcBMI : function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
}

console.log(john.calcBMI());
console.log(mark.calcBMI());


if (john.calcBMI() > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${(mark.fullName)}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}


