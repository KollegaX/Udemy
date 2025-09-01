const calcAge2 = function (birthYear) {
    return 2037 - birthYear ;
}

const calcAge4 = x => {
    2037 - x;
}

/// OR

const calcAge44 = x => 2037 - x;
const age44 = calcAge44(1991);
// console.log(age44);



const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1990, 'George'));
