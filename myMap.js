// MAP //
Array.prototype.myMap = function(callbackFn) {
    let resultArr = [...this];

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
console.log("map")
console.log(myArray.map((x) => {return x * 2}))
console.log(myArray);