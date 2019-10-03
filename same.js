function same(arr1, arr2){
    size = arr1.length;
    numbers = {};
    if (size != arr2.length) {
        return console.log("Arrays do not have equal size");
    }
    else{
        for (let i = 0; i < size; i++){ // O(n)
            index = arr2.indexOf(Math.pow(arr1[i], 2)); // O(n)
            if (index == -1){
                return console.log("The second array is not equal to the first one powered");
            }
            else{
                arr2.splice(index, 1);
            }
        }
    }
    return true;
} // O(n²)

function same_sort(arr1, arr2){
    size = arr1.length;
    numbers = {};
    arr1.sort(ascend); // O(nlogn)
    arr2.sort(ascend); // O(nlogn)
    if (size != arr2.length) {
        return console.log("Arrays do not have equal size");
    }
    else{
        for (let i = 0; i < size; i++){ // O(n)
            if (arr2[i] == Math.pow(arr1[i], 2)){
                return console.log("The second array is not equal to the first one powered");
            }
            else{
                arr2.splice(index, 1);
            }
        }
    }
    return true;

} // O(nlogn)

function same_frequency(arr1, arr2){
  if (arr1.length != arr2.length) {
      return console.log("Arrays do not have equal size");
  }
  else{
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let val in frequencyCounter2){
      if(!Math.sqrt(val, 2) in frequencyCounter2){
          return false;
      }
      if(frequencyCounter1[Math.sqrt(val, 2)] !== frequencyCounter2[val]){
          return false;
      }
    }
  }
  return true;
}// O(n)



function ascend(a, b){
    return a - b;
}

var arro = [1, 3, 7, 12, 13];
var arra = [1, 9, 49, 144, 169];

var a = Math.pow(3, 2);
console.log(a);

console.log(same_sort(arro, arra));
