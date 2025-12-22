// {} does NOT mean “object”
// In your code you wrote:
// let val: {} = 'some text';
// You described {} as “object”, but that’s not correct.
// What {} actually means in TypeScript:
// Any value EXCEPT null and undefined
// So {} allows:
// string
// number
// boolean
// arrays
// objects
// functions
// It does NOT mean “plain object”.
// If you want “must be an object”, the correct type is object or a specific object shape.
// This is a very common TypeScript pitfall.









// Array inference is stronger than you thought
// You said that this:
// let hobbies = ['Sports', 'Cooking'];
// Is “just an array” or similar to any[].

// TypeScript infers this automatically as:
// an array of strings
// That’s why pushing a number fails.
// TypeScript only falls back to any[] when it has no information at all (for example: an empty array).
// So inference here is working correctly and strongly typed.






// never is not “nothing returned”
// You understood that void returns nothing and never is different, but the reason why never exists wasn’t clear.
// never means:
// the function NEVER finishes
// execution stops permanently
// That happens when:
// an error is always thrown
// there is an infinite loop
// Why this matters:
// TypeScript uses never to detect unreachable code and missing cases in logic (like switch statements).
// So never is not about return values — it’s about control flow.





// unknown is NOT just “something may come”
// That’s half right, but the important part you missed is enforcement.
// The key difference:
// any lets you do anything without checks
// unknown forces you to check before using the value
// unknown exists to prevent unsafe operations when data comes from outside (APIs, user input).
// It is a safety mechanism, not just a placeholder.




// Interfaces vs Types — why interfaces matter
// You answered “I forgot” — so this one is important.
// The real difference:
// interfaces can be merged
// type aliases cannot
// This matters in:
// libraries
// public APIs
// extending third-party definitions
// That’s why interfaces are often preferred for object shapes that may grow over time.




// private, protected, and #private are NOT the same
// Your explanation mixed them up.
// Key correction:
// private and protected exist ONLY at compile time (TypeScript)
// #private exists at runtime (JavaScript)
// That means:
// private and protected disappear after compilation
// #private is enforced by JavaScript itself
// This is a huge difference for security and encapsulation.




// keyof + generics does more than “same kind”
// You said:
// “both are the same in kind of way”
// What the function actually guarantees:
// the key must exist on the object
// you cannot access properties that aren’t there
// This prevents entire classes of runtime bugs where you mistype or guess property names.
// It’s not about similarity — it’s about correctness.




// as const does more than readonly
// You understood that it prevents mutation, which is good.
// What you missed:
// it freezes literal types
// So instead of “string”, TypeScript keeps:
// exact string values like 'admin'
// This is why as const is powerful for roles, permissions, and configs.




// satisfies is NOT a type annotation
// You mostly understood this, but here is the missing point:
// satisfies:
// checks that a value matches a type
// WITHOUT changing the inferred type of that value
// A normal type annotation REPLACES inference.
// satisfies PRESERVES inference.
// That’s why it’s safer.




// Think of conditional types as:
// if/else statements
// but for types
// They allow TypeScript to make decisions based on the structure of types, not values.
// They are mainly used in advanced utility types and libraries.




// infer was not understood
// This is the most advanced missing piece.
// infer allows TypeScript to:
// extract a type from inside another type and reuse it
// Without infer, TypeScript cannot “grab” return types, parameter types, or nested types.
// That’s why built-in types like ReturnType<T> exist.
// You usually don’t write infer often — but understanding it means you truly understand advanced TypeScript.
