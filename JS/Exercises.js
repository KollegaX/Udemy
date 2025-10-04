// ///////////////////////////////////////
// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each
//    player name to the console, along with the goal
//    number (Example: "Goal 1: Lewandowski")

// 2. Use a loop to calculate the average odd and log it
//    to the console (We already studied how to calculate
//    averages, you can go check if you don't remember)

// 3. Print the 3 odds to the console, but in a nice
//    formatted way, exactly like this:
//        Odd of victory Bayern Munich: 1.33
//        Odd of draw: 3.25
//        Odd of victory Borussia Dortmund: 6.5
//    Get the team names directly from the game object,
//    don't hardcode them (except for "draw"). HINT: Note
//    how the odds and the game objects have the same
//    property names 😉

// BONUS: Create an object called 'scorers' which
// contains the names of the players who scored as
// properties, and the number of goals as the value. In
// this game, it will look like this:
//        {
//          Gnabry: 1,
//          Hummels: 1,
//          Lewandowski: 2
//        }

// GOOD LUCK
// // 


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrusia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez',' Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski'],['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze'],
    ],
    score : '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds : {
        team1 : 1.33,
        x : 3.25,
        team2: 6.5,
    }
}

/// 1.
let count = 1;
for (const looped of game.scored){
    console.log(`Goal: ${count} : ${looped}`);
    count++; 
}

/// 2.
let addingOdds = 0;
for (const odds of Object.values(game.odds)){
    addingOdds += odds;
}
addingOdds = Number((addingOdds / Object.values(game.odds).length).toFixed(2));
console.log(addingOdds);


/// 3.
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// OR
for (const key of ['team1', 'team2']) {
  console.log(game[key]);
}


/// Bonus :
const scorers = {};

// for (let players of game.scored){
//     if (!scorers[players]){
//         scorers[players] = 1;
//     } else if (scorers[players]) {
//         scorers[players] += 1;
//     }
// }
/// OR

for (let players of game.scored){
    scorers[players] = (scorers[players] ?? 0) + 1
}
console.log(scorers);


///////////////////////////////////////////////////////////////////////////////////////////////////////

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pasta',
    'Risotto',
    '123',
    'Pizza',
    'Zazza',
    420
])

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza')
ordersSet.delete('Pasta')
console.log(ordersSet);

// in sets there are no indexes;
// to have indexes make it into array with array.from or [...setIntoArray];

let arraying = [...ordersSet]
console.log(arraying);
console.log(arraying[0]);


const nums = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(nums)];
const unique2 = new Set(nums)
console.log(unique2); // [1, 2, 3, 4]



const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

console.log(gameEvents);

/// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

/// 2.
gameEvents.delete(64)


/// 3.
const time = [...gameEvents.keys()].pop()
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);


/// 4.
for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF ] ${min} : ${event}`);
    
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

let checkCount = 1;

function solve(list){
    let camelCasing = list.trim().toLowerCase().split('_').filter(Boolean);    
    if (camelCasing.length !== 2){return;}
    let final = camelCasing[0].concat(camelCasing[1][0].toUpperCase() + camelCasing[1].slice(1));
    
    console.log(`${final.padEnd(20)}${'✅'.repeat(checkCount)}`);
    checkCount++;
}


solve('underscore_case_')
solve('first_name')
solve('Some_Variable')
solve('calculate_AGE')
solve('delayed_departure')
solve('jonas_Schdm')
solve('jonas_Schdm')
solve('jonas_Schdm')

///////////////////////////////////////////////////////////////////////////////////////////////////////

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel743299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30+_Departure;dub93766109;rus323639855;12:32'
let everyFlight = flights.split('+');

for (let i = 0; i < everyFlight.length; i++){
let departureSplitting = everyFlight[i].split(';');
let first = departureSplitting[0].split('_').join(' ');
let second = departureSplitting[1].slice(0,3).toUpperCase();
let third = departureSplitting[2].slice(0,3).toUpperCase();
let hours = departureSplitting[3].split(':').join('h')
console.log(`${first} from ${second} to ${third} (${hours})`.trim());
}





