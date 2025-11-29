// // AJAX - Asynchronous JavaScript And XML : Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically (but XML isn't now commonly used, now is JSON)


// // API - Application Programming Interface : Piece of software that can be used by another piece of software, in order to allow applications to talk to each other;
// // There are be many type of APIs in web development : DOM API, Geolocation API, Own Class API


// /// "Online" API : Application running on a server, that receives requests for data, and sends data back as response;
// // We can build our own web APIs (REQUIRES BACK-END DEVELOPMENT, e.g. with node.js) or use 3rd-party APIs
// // There is an API for everything : Weather data, Data about countries, Flights data, currency conversion data, APIs for sending email or SMS, Google Maps...

// const request = new XMLHttpRequest();
// request.open('GET', ) //(Some API)
// // and then we send it so we can get
// request.send();

// request.addEventListener('load', function(){
//     console.log(this.responseText);
    
//     const [data] = JSON.parse(this.responseText); // doing [data] its the same as : (const data = JSON.parse(this.responseText)[0])
//     console.log(data);
    
//     // const html = .....;
// })


// /// 261. How the Web Works : Requests and Responses
// // Whenever we try to access a Web Server, the browser, which is the client, sends a request to the server and the server will then send back a response and that response contains the data or the Web page that we requested. This process works the exact same way no matter if we're accessing an entire Web page or just some data from a Web API. This process has a name : (Request-response model or Client-server architecture)

// // DNS - Domain name server 
// // Domain isn't the real address and that a DNS will convert the domain to the real IP address. And after the real IP address has been sent back to the browser, we can finally call it. So once we have the real IP address, a TCP socket connection is established between the browser and the the server. 
// // What is TCP and IP ?
// // TCP : Transmission Control Protocol
// // IP : Internet Protocol
// // Together they are communication protocols that define exactly how data travels across the Web. They are basically the internets fundamental control system, because they set the rules about how data moves on the Internet
// // HTTP : Hypertext Transfer Protocol
// // HTTPS is encrypted using TLS or SSL

// const renderCountry = function(data, className = ''){
//     const html = `
//     <article class ="country ${className}">
//     <img class = "country__img" src="${data.flag}" />
//     <div class = "country__data">
//     <h3 class = "country__name>${data.name}</h3>
//     <h4 class = "country__region"> ${data.region} </h4>
//     <p class = "country__row"<span> </span> ${(+data.population / 1000000).toFixed(1)} people
//     <p class = "country__row"> <span> </span> ${data.languages[0].name}
//     <p class = "country__row> <span> </span> ${data.currencies[0].name}
//     </div>
//     </article>`;
// }

// const getCountyAndNeighbour = function (country) {
//     // AJAX call country 1 
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country 1
//         renderCountry(data)
        
//         // Get neighbour country (2)
//         const neighbour = data.borders?.[0];

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function (){
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
            
//         })

        
//     })
// }
// getCountyAndNeighbour('portugal')


// // Callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence and in fact this happens for all asynchronous tasks, which are handled by callbacks and not just AJAX calls

// // example :
// setTimeout(() => {
//     console.log(`1 second passed`);
//     setTimeout(() => {
//     console.log(`2 second passed`);
//     setTimeout(() => {
//     console.log(`3 second passed`);
//     setTimeout(() => {
//     console.log(`4 second passed`);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
// // here we have callback hell  and in fact, callback hell is pretty easy to identify, by the triangular shape that is formed here. The problem of it is making the code messy and hard to maintain and very difficult to understand, and to reason about.., and this kind of code will have more bugs, and it's just worse code

// // code that is hard understand is bad code and is basically bad code, because it will have more bugs, because the harder it is to understand code and to reason about the code, the more difficult it will be to add new features and to add more functionality to the application

// // we need a way to solve callback hell, abd fortunately for us, since ES6, there is actually a way of escaping callback hell by using PROMISES!


// // const request = new XMLHttpRequest();
// //     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// //     request.send();

//     // and with fetch()
// const requesting = fetch('https://restcountries.eu/rest/v2/name/${country}')

// // Promise : An object that is used as a placeholder for the future result of an asynchronous operation (Promise is like a container for asynchronously delivered value. (a container for a future value))
// // So when we start the AJAX call, there is no value yet, but we know that there will be some value in the future, and so we can use a promise to handle this future value
// // Advantage of using Promises
// // (-> We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results)
// // (-> Instead of nesting callbacks, we can CHAIN PROMISES for a sequence of asynchronous operations : ESCAPING CALLBACK HELL)
// // Promises is ES6 Feature (became available in JavaScript in 2015)


// // LIFE CYCLE OF A PROMISE
// // 1 : (Before the future value is available) -> Promise is pending -> The asynchronous task is still doing its work in the background
// // 2 : (When the task finally finishes, we say that the promise is settled) -> Settled -> 2 types of settled promises -> FULFILLED and REJECTED
// // FULFILLED is a promise that has successfully resulted in a value just as we expected. (When we use promise to fetch data from an API, the fullfilled promise successfully got that data)
// // REJECTED is a promise that means there has been an error during the asynchronous task. (When we use promise to fetch data from an API, the rejected promise for example the user is offline and can't connect to the API server)


// /// 264. CONSUMING PROMISES

// const getCountryData = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
//         console.log(response); // to be able to see that response in the body, we need the JSON method
//         return response.json(); // available on all the response objects that is coming from the fetch function, so all the resolved values. The problem is that this json function itself is actually also an asynchronous function. -> It will also return a new promise -> that's why we make a new .then, so we can read the value
//     }).then(function(data) {
//         console.log(data);
        
//     })
// }
// getCountryData('portugal')


// // OR with arrow functions (simplified)

// const getCountryData2 = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => response.json())
//     .then(function(data) {
//         renderCountry(data[0])
//     });
// }
// getCountryData2('portugal')


// // Promises do not get rid of callbacks, but they do in fact get rid of callback hell



/// 265. Chaining Promises
const getCountryData3 = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if (!neighbour) return;

        // Country 2
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    }).then(response => response.json())
    .then(data = renderCountry(data, 'neighbour'))
}
getCountryData3('portugal')








/// 266. Handling Rejected Promises

const getCountryData4 = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json(), err => alert(err))
}

// Handling the error is also called catching the error, what if there is no error in the first promise, but on the second ? - then we need to catch the same error on the second. However this is a bit annoying and so, there is a better way of basically handling all these errors globally just in one central place, with the .catch() Method



.catch(err => {
    console.error(`${err} boom `);
    // if we got a css class and stuff we can make a function in which we get Render the error with a function like :
    // renderError(`Something went wrong ${err.message}`)
})

// we got besides .then() and .catch(), the .finally
.finally(() => {

}) // finally is gonna be called always, but its not always useful ( we use it for something that always needs to happen, no matter the result of the promise)



/// 267. Throwing Errors Manually
let razcuks = new Error(`Country not found ${response.status}`);
if (!response.ok) throw razcuks

/// or better

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} ${response.status} `);
    });
}





/ 269. Asynchronous Behind the Scenes : The Event Loop
.then is microtask


/ 270 The event loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++){};
    console.log(res);
    
})
console.log('Test end');


/ 271. Building a Simple Promise
/ Encapsulating Asynchronous behavior into a promise 
const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening');
    
    setTimeout(function() {
    if (Math.random() >= 0.5){
        resolve('You win');
    } else {
        reject(new Error('You lost ur money'));
    }

    }, 2000)
});
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));


Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve, _){ // or just (resolve)
        setTimeout(resolve, seconds * 1000);
    })
}
wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1)
}).then(() => console.log('I waited for 1 sec'))



/// static method on the promise constructor
Promise.resolve('123').then(x => console.log(x))
Promise.reject('123').catch(x => console.error(x))
// Promise.reject(new Error('Problem!')).catch(x => console.error(x))




/// Exercise :
const wait1 = function (seconds) {
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 1000);
    });
}

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        let image = document.querySelector('img');
        image.src = imgPath;

        image.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found!'))
        });

    })
}
let currentImg;

createImage('img/img-1.jpg for example').then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait1(2)
}).then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
}).then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait1(2)
}).then(() => {
    currentImg.style.display = 'none';
}).catch(err => console.error(err));




/ 274. Consuming Promises with Async/Await

elegant wait to do fetch, then()...

const getPosition = function(){
    return new Promise(function (resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
}


const whereAmI = async function(country) {
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await res.json();

    //  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res));  

    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
    
    
}
whereAmI('portugal');
console.log('FIRST');



try {
let  y = 1;
const x = 3;
y = 3;
} catch(err) {
    console.log(err.message);
}



