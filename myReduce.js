// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue){

    let result = initialValue?initialValue:this[0];

    let prev = initialValue?initialValue:this[0];

    for(let i = initialValue?0:1; i < this.length; i++){
        prev = callbackFn(prev, this[i]);
    }
    return prev;
}

// TEST //
let myArray = [1,2,3,4,5];
console.log('myReduce');
console.log(myArray.myReduce((previousValue, currentValue) => previousValue + currentValue));
console.log(myArray.myReduce((previousValue, currentValue) => previousValue + currentValue, 5));

myArray = [1,2,3,4,5];
console.log('reduce');
console.log(myArray.reduce((previousValue, currentValue) => previousValue + currentValue));
console.log(myArray.reduce((previousValue, currentValue) => previousValue + currentValue, 5));