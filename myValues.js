// VALUES //
Object.prototype.myValues = function(obj){
    let resultArray = [];
    for(const [key, value] of Object.entries(obj)){
        resultArray.push(value);
    }
    return resultArray;
}

// TEST //
let myObject = {
    a: '1',
    b: '2',
    c: '3'
};
console.log('myValues');
console.log(Object.myValues(myObject));


console.log('values');
console.log(Object.values(myObject));