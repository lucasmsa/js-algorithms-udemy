function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr){
  let flag;
  for(let i = arr.length; i > 0; i--){
    flag = 1;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        flag = 0;
      }
    }
    if(flag) break;
  }
  return arr;
}


console.log(bubbleSort([9, 12, 13, 10, 82, 96, 10, 2]));
