// Shallow copy and deep copy
/*

    JS datatypes

    structural v/s premative

    structural: {
        - undefined 
        - boolean
        - number
        - string
        - bigint
        - symbols
    }

    premative: {
        - object: (new) object, array, map, set, date
        - Function
    }

*/

// value v/s refrence 

// premative uses pass values

let x = 2;
let y = x;
// console.log(y+=2);
// console.log(x);

// structral data types uses pass refrence

let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
// console.log(yArray);
// console.log(xArray);

// immutable v/s mutable

// premative are immuitable

let myName = "Dave";
myName[0] = "W";
// console.log(myName);

// structral are mutabele 

yArray[0] = 8;
// console.log(yArray);
// console.log(xArray);

// immpure function mutates data

const addToScore = (arr, score) => {
    arr.push(score);
    return arr;
}

const scoreArr = [8, 4, 3];
console.log(addToScore(scoreArr, 9));

// How to make a shallow copy 

const zArray = [...yArray, 10];
// console.log(zArray);
// console.log(yArray)

// console.log(xArray === yArray);
// console.log(zArray === yArray);

// with Object.assign()
const tArray = Object.assign([], zArray);
// console.log(tArray);
// console.log(tArray === zArray); 


//object.freeze()
const scoreObj = {
    'first': 45,
    'second': 50,
    'third': {'s': 3, y: 4}
}

Object.freeze(scoreObj); // static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed
scoreObj.third.s = 8;
console.log(scoreObj);
// still mutates -- it is a shallow freeze;

// To avoid this Deep copy is needed to avoid this

/* 
here the one line vannilla js solution,
but it dosent works with dates, function, undefined, infinity, map, set, blobs, filelist, imagedates, regExp and other complex datatypes
*/

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

const deepClone = (obj) => {

    if(typeof obj !== 'object' || obj === null) return obj;

    // create an array or object to hold the value 
    const newObject = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        const value = obj[key];
        // recursive call for nested objects and array
        newObject[key] = deepClone(value);
    }

    return newObject;

}

const newScoreArray = deepClone(scoreArr)
console.log(newScoreArray);
console.log(newScoreArray === scoreArr);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(scoreObj);
console.log(myScoreObj === scoreObj);

// Now we can make a pure function 

const pureToAddScoreHistory = (array, score, cloneFun) => {
    const newArray = cloneFun(array);
    newArray.push(score);
    return newArray;
}

const pureUpdatedScore = pureToAddScoreHistory(scoreArr, 69, deepClone);
console.log(pureUpdatedScore);
console.log(scoreArr);