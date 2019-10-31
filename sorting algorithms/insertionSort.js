function insertionSort(arr){
  let value = 0;
  for(let i = 1; i < arr.length; i++){
    value = arr[i];
    j = i-1;
    while(arr[j] > value && j >= 0){
        arr[j+1] = arr[j];
        j -= 1;
      }
    arr[j+1] = value;
    }
  return arr;
}


console.log(insertionSort([9, 12, 13, 10, 82, 96, 10]));
