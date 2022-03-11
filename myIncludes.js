// INCLUDES //
Array.prototype.myIncludes = function(searchElement, fromIndex){
    for(let i = fromIndex?fromIndex:0; i < this.length; i++){
        if(this[i] === searchElement) return true;
    }
    return false;
}

// TEST //
let myArray = [1,2,3,4,5];
console.log('myIncludes');
console.log(myArray.myIncludes(3));
console.log(myArray.myIncludes(6));
console.log(myArray.myIncludes(2, 3));

console.log('includes');
console.log(myArray.includes(3));
console.log(myArray.includes(6));
console.log(myArray.includes(2, 3));