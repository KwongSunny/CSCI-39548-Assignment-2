// INDEX OF //
Array.prototype.myIndexOf = function(searchElement, fromIndex){
    for(let i = fromIndex?fromIndex:0; i < this.length; i++){
        if(this[i] === searchElement) return i;
    }
    return -1;
}

// TEST //
let myArray = [1,2,3,4,5];
console.log('myIndexOf');
console.log(myArray.myIndexOf(3));
console.log(myArray.myIndexOf(6));
console.log(myArray.myIndexOf(2, 3));

console.log('indexOf');
console.log(myArray.indexOf(3));
console.log(myArray.indexOf(6));
console.log(myArray.indexOf(2, 3));