function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let p = Pivot(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
  return arr;
}


function Pivot(arr, start = 0, finish = arr.length - 1){
  let pivot_init = start, pivot = start;
  for (let i = start + 1; i <= finish; i++){
    if(arr[i] < arr[pivot_init]){
       pivot += 1;
       swap(arr, i, pivot);
     }
  }
  swap(arr, pivot_init, pivot);
  return pivot;
}

arr = [14, 4, 5, 1, 32, 2, 12, 3, 41, 13, 17];

console.log(quickSort(arr));
