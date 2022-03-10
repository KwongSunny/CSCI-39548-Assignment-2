// MAP //
Array.prototype.myMap = function(callbackFn, thisArg) {
    let resultArr = thisArg?[...thisArg]:[...this];

    for(let i = 0; i < resultArr.length; i++){
        resultArr[i] = callbackFn(resultArr[i]);
    }

    return resultArr;
}

// TEST //
let myArray = [1,2,3,4,5];
console.log("myMap");
console.log(myArray.myMap((x) => {return x * 2}));
console.log(myArray);

myArray = [1,2,3,4,5];
myArray2 = [3,4,5,6,7];
console.log("myMap(2)")
console.log(myArray.myMap((x) => {return x * 2}, myArray2));
console.log(myArray);


myArray = [1,2,3,4,5];
console.log("map")
console.log(myArray.map((x) => {return x * 2}))
console.log(myArray);