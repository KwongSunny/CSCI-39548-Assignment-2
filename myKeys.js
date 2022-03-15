// KEYS //
Object.prototype.myKeys = function(obj){
    let resultArray = [];
    for(const [key, value] of Object.entries(obj)){
        resultArray.push(key);
    }
    return resultArray;
}

// TEST //
let myObject = {
    a: '1',
    b: '2',
    c: '3'
};
console.log('myKeys');
console.log(Object.myKeys(myObject));


console.log('keys');
console.log(Object.keys(myObject));