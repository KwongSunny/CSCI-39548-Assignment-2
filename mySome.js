// SOME //
Array.prototype.mySome = function(callbackFn, thisArg) {
    let comparisonArray = thisArg?[...thisArg]:[...this];

    for(let i = 0; i < comparisonArray.length; i++){
        if(callbackFn(comparisonArray[i])) return true;
    }
    return false;
}

// TEST //
let myArray = [1,2,3,4,5];
console.log('mySome');
console.log(myArray.mySome(x => (x % 5 === 0)));
console.log(myArray.mySome(x => (x % 5 === 1)));
console.log(myArray.mySome(x => (x % 5 === 2)));
console.log(myArray.mySome(x => (x % 5 === 5)));

let myArray2 = [3,4,5,6,7];
console.log('mySome(2)');
console.log(myArray.mySome(x => (x % 7 === 0), myArray2));
console.log(myArray.mySome(x => (x % 8 === 0), myArray2));

console.log('some');
console.log(myArray.some(x => (x % 5 === 0)));
console.log(myArray.some(x => (x % 5 === 1)));
console.log(myArray.some(x => (x % 5 === 2)));
console.log(myArray.some(x => (x % 5 === 5)));