const breeds = [
{
    breed: 'German Shepherd',
    averageWeight : 32,
    activies : ['fetch', 'swimming'],
},
{
    breed: 'Dalmatian',
    averageWeight : 24,
    activies : ['running', 'fetch','agility'],
},
{
    breed: 'Labrador',
    averageWeight : 28,
    activies : ['swimming', 'fetch'],
},
{
    breed: 'Beagle',
    averageWeight : 12,
    activies : ['digging', 'fetch'],
},
{
    breed: 'Husky',
    averageWeight : 26,
    activies : ['running', 'agility','swimming'],
},
{
    breed: 'Bulldog',
    averageWeight : 36,
    activies : ['sleeping'],
},
{
    breed: 'Poodle',
    averageWeight : 12,
    activies : ['agility','fetch'],
},
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight

// 2.
const dogBothActivities = breeds.find(breed => breed.activies.includes('fetch') && breed.activies.includes('running')).breed;
console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map(breed => breed.activies).flat()
// OR
const allActivities = breeds.flatMap(breed => breed.activies);
console.log(allActivities);

// 4.
const uniqueActivities = new Set(allActivities); // and then [...new Set(allActivities)]
console.log(uniqueActivities);


// 5.
const swimmingBreeds = breeds.filter(breed => breed.activies.includes('swimming'));
const swimmingActivities = swimmingBreeds.map(breed => breed.activies)
const swimmingAdjacent = [...new Set(swimmingActivities.flat().filter(activity => activity !== 'swimming'))];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(x => x.averageWeight > 10));


// 7.
console.log(breeds.some(breed => breed.activies.length >= 3))


/// Bonus 
const fetchWeights = breeds.filter(breed => breed.activies.includes('fetch')).map(breed => breed.averageWeight)
const heaviestFetchBreed = Math.max(...fetchWeights)
console.log(fetchWeights);
console.log(heaviestFetchBreed);
