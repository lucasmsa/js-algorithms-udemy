function linearSearch(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){ return i }
  }
  return - 1;
}


function binarySearch(arr, value){
    let left = 0;
    let right = arr.length-1;
    let k = Math.round((right + left)/2);
    while (left <= right) {
      if( arr[k] > value) right = k - 1;
      else if( arr[k] < value) left = k + 1;
      else if(arr[k] === value) return k;
      k = Math.round((right+left)/2);
    }
    return -1;
}


function naiveSearch(str, pattern){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === pattern[0]){
      for(let j = 1; j < pattern.length; j++){
        if(!(str[i + j])) break;
        if(str[i + j] !== pattern[j]) break;
        if(j === pattern.length-1) count += 1;
      }
    }
  }
  return count;
}


console.log(binarySearch([1, 2, 3, 4, 5, 80],80));
console.log(naiveSearch("lol wtf lmao", "wtf"));
