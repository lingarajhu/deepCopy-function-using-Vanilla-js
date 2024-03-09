// closure => A closure is a function having access to the parent scope, even after the parent function has clsoed.


// closure is created when we define the function, not when a function is executed.

// global scope 

/*

    let x = 1;

    const parentFunction = () => {

    // local scope 
    let myValue = 10;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 1);
        console.log(myValue += 10);
    }

    return childFunction;
    }

    const res = parentFunction();

    console.log(res);
    res();
    res();
    res();
    console.log(x);
    console.log(myValue); // refrence error, private value

*/ 

//--------------------------//--------------------------------

// IIFE(Immidetely invoced function exprection)

/* 
    const privateVal = (() => {
        let count = 0;
        console.log(`intial value ${count}`);

        return () => {
            count += 1;
            console.log(count);
        }
    })();

    privateVal();
    privateVal();
    privateVal(); 

*/

// --------------------------------//-------------------------

// IIFE with some parameter

/* 
    const credits = ((num) => {
        let credits = num;
        console.log(`intial credits value ${credits}`);

        return () => {
            credits -= 1;
            if(credits > 0){
                console.log(`playing games ${credits} credits remaining`);
            }
            if(credits < 0){
                console.log(`not enough credits`);
            }
        }
    })(3);

    credits();
    credits(); 

*/


/* Here you can see 'credits' which is a privet variable is accessed because this anounomous we returned form our IIFE

this arrow function has clousere with the IIF which has a private variable */

//--------------------------------//--------------------------

// prototype and prototypal inheritance and prototype chain


//ES6 introduced the classes which is more better way to construct objects.

// let arr = ["Hi", "Hellow", "Great"];

/*
    const person = {
        alive: true,
    }

    const musisian = {
        plays: true,
    }

/* 
    musisian.__proto__ = person; // this is because of the inheritance  [it says person is a perent of musisian].
*/ 

/*
    Object.setPrototypeOf(musisian, person);
    console.log(musisian.alive);
    console.log(musisian.plays);

*/


// JS now has getPrototypeOf and setPrototypeOf methods insted of using __proto__.

/* 

    Object.setPrototypeOf(musisian, person);
    console.log(Object.getPrototypeOf(musisian));
    console.log(musisian.__proto__);

*/

/* 
    const guitarist = {
        strings: 6,
        __proto__: musisian
    }

    console.log(guitarist.plays);
    console.log(guitarist.alive);
    console.log(guitarist.strings);

    console.log(guitarist);

*/

// object with getter and setter methods

/*     
    const car = {
        doors: 2,
        seats: "Vinyl", 

        get seatMaterial() {
            return this.seats;
        },

        set seatMaterial(material){
            this.seats = material;
        }
    }

    const luxuryCar = {}

    Object.setPrototypeOf(luxuryCar, car);
    luxuryCar.seatMaterial = "leather" // note keyword this
    console.log(luxuryCar);
    console.log(luxuryCar.doors)
    console.log(car);



    {getting keys of an object}

    console.log(Object.keys(luxuryCar));

    Object.keys(luxuryCar).forEach(keys => {
        console.log(keys);
    })

*/


// Recursion 

// Defination

// In computer science Recursion is a mathod of solving a problem where the solution depends on solution of smaller instance of the same problem.

// iterative function 

const countToTen = (num = 1) => {
    while(num <= 10) {
        console.log(num);
        num++;
    }
}

// countToTen();

// Recursion function

const recuToTen = (num = 1) => {
    if(num > 10){
        return;
    }
    console.log(num);
    num++;
    recuToTen(num);
}

// recuToTen();

// febinocie series [0, 1, 1, 2, 3, 5, 8, 13, 21, etc]

// without recursion 

const fibonacci = (num, array = [0, 1]) => {
    while(num > 2){
        const [secondLast, last] = array.slice(-2);
        array.push(secondLast + last);
        num -= 1;
    }
    return array;
}

// fib using for loop
/* 
    const finUsingFor = (n) => {
        let arr = [0, 1];
        for(let i=2; i<=n; i++){
            arr.push(arr[i-1] + arr[i-2]);
        }
        retunr arr[n];
    }

*/

// console.log(fibonacci(5));


const fib = (num, array = [0, 1]) => {
    if(num < 2){
        return array;
    }
    const [secondLast, last] = array.slice(-2);
    return fib(num-1, [...array, secondLast + last]);
}

// console.log(fib(5));

// what number is in nth position of fibonacci series

const fibonacciPos = (pos, seq = [0, 1]) => {
    if(pos <= 1){
        return pos;
    }
    for(let i=2; i<=pos; i++){
        const [secondLast, last] = seq.slice(-2);
        seq.push(secondLast + last);
    }

    return seq[pos];
}

// console.log(fibonacciPos(8));

const recPosCount = (pos) => {
    if(pos < 2) {
        return pos;
    }
    return recPosCount(pos - 1) + recPosCount(pos - 2);
}

// console.log(recPosCount(3));

// turnary statement
const fibPos = (pos) => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

// console.log(fibPos(8));

// rangeOfNumbers() 

const rangeOfNumbers = (startNum, endNum) => {
    if(endNum < startNum){
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum-1);
        numbers.push(endNum);
        return numbers;
    }
}

// console.log(rangeOfNumbers(1, 7));

// Revers a string

const revString = (str) => {

    if(str === ""){
        return "";
    }else return revString(str.substr(1)) + str.charAt(0);
}

// console.log(revString("hello"));


// Currying 

//Concept of lambda calculas

// Defination: Currying takes a function that recivies more than a one parameter and brakes it into unary(one parameter) function

// Therefore, a curried function takes only one parameter at a time

//  Basic example of curriying

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich("Baccon")("Tomato")("Cheese");
// console.log(mySandwich);

// optimised curriying

const buildSammy = ingred1 => ingred2 => ingred3 => 
        `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("Sam1")("sam2")("$am3");

// console.log(mySammy);


//Another example of currying function

const multiply = (x, y) => x * y;
// console.log(multiply(2, 3));

const curriedMult = x => y => x * y;
// console.log(curriedMult(2));
// console.log(curriedMult(2)(3));

// Partially applied functions are common use of curried function

const timesTen = curriedMult(10);
// console.log(timesTen);
// console.log(timesTen(2));

// Another example

const updateElemText = id => content => document.querySelector(`#${id}`).   
    appendChild(document.createElement('h2')).
        textContent = content;

const updateHeaderText = updateElemText('js');
updateHeaderText('Learning');

// Another example

const addCustomer = fu => (...args) => {
    console.log('savings coustomer info...');
    return fu(...args);
}

const processOreder = fn => (...args) => {
    console.log(`processing Order #${args[0]}`);
    return fn(...args);
}

let completOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed`);
}

completOrder = processOreder(completOrder);
console.log(completOrder);
completOrder = addCustomer(completOrder);
completOrder("1000");

// above example in a more standerd way

function addCustomer(...args) {
    return function processOreder(...args){
        return function completOrder(...args){
            // end
        }
    }
}

