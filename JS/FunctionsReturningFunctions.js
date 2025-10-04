const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')

/// This works because of closures (closures, part of JS)
/// Functions returning other functions is going to be useful in some situations, especially if we use functional programming

greet('Hello')('Jonas')


/// In Arrow Function (arrow function returning other arrow function)
const greet1 = greeting => name => console.log(`${greeting} ${name}`);
greet1('Hi')('Jonass')
