const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter']
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);
/// friends = ['Bob','Alice'] - we cannot do that;

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; /// we can put other arrays in an array;
console.log(jonas);
console.log(jonas.length);


//// EXERCISE:
const calcAge = function (birthYear)
 {
  return 2037 - birthYear;
 }

 const years = [1990,1967,2002,2010,2018];

 /// what we cannot do is calcAge(years); we can't number - array;
 /// we can't do operations with arrays;
/// but we can do this ;}
 for (let i = 0; i < years.length; i++){
   console.log(calcAge(years[i]));
 }

 /// OR

 const age1 = calcAge(years[0]) /// and so on
 
