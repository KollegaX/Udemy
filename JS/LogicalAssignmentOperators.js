const rest1 = {
    name : 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name :'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // (this sets because rest1 doesnt have owner, it sets owner : undefined)
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; // here it doesnt set him undefined, which is great - it doesnt set actually nothing
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

