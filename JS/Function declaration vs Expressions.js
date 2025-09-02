// FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2005);

/// FUNCTION EXPRESSION
/// anonymous function, function without a name
const calcAge2 = function (birthYear) {
     return 2037 - birthYear;
}
const age2 = calcAge2(1991);


console.log(age1, age2);


/// We can actually call FUNCTION DECLARATION before the actual code  (it won't be a good idea in many cases, but u can)
/// - For example :
const age3 = calcAge3(2005);
console.log(age3);

function calcAge3(birthYear){
    return 2037 - birthYear;
}




