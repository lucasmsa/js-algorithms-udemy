function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function selectionSort(arr){
  let minimum;
  for (let i = 0; i < arr.length; i++){
    minimum = i;
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[minimum]) minimum = j;
    }
    if(minimum !== i) swap(arr, i, minimum);
  }
  return arr;
}


console.log(selectionSort([9, 12, 13, 10, 82, 96, 10, 2]));
