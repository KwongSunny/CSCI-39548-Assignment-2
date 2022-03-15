// LAST INDEX OF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex){
    for(let i = fromIndex?fromIndex:this.length-1; i > -1; i--){
        if(this[i] === searchElement) return i;
    }
    return -1;
}

// TEST //
let myArray = [1,2,3,4,5,3];
console.log('myLastIndexOf');
console.log(myArray.myLastIndexOf(3));
console.log(myArray.myLastIndexOf(6));
console.log(myArray.myLastIndexOf(2, 3));

console.log('indexOf');
console.log(myArray.lastIndexOf(3));
console.log(myArray.lastIndexOf(6));
console.log(myArray.lastIndexOf(2, 3));