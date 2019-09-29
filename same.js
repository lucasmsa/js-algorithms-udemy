var Math = require('mathjs');

function same(arr1, arr2){
    size = arr1.length
    if (size != arr2.length) {
        return console.log("Arrays do not have equal size");
    }
    else{
        for (let i = 0; i < size; i++){
            if (arr2[i] != Math.pow(arr1[i], 2)){
                return console.log("The second array is not equal to the first one powered");
            }
            else{
                continue;
            }
        }
    }
    return true;
}

var arro = [1, 3, 7, 12];
var arra = [1, 9, 49, 144];

var a = Math.pow(3);
console.log(a);

console.log(same(arro, arra));