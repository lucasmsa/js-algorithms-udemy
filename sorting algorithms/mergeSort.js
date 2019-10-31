function MergeSort(arr){
  if(arr.length <= 1){ return arr }

  let i = MergeSort(arr.slice(0, Math.floor(arr.length/2)));
  let j = MergeSort(arr.slice(Math.floor(arr.length/2)));

  return Merge(i, j);
}


function Merge(arr1, arr2){
  let sortedArr = [], i = 0, j = 0;

  while (i <= arr1.length && j <= arr2.length){

    if(arr1[i] <= arr2[j]){
        sortedArr.push(arr1[i]);
        i += 1;

    } else if(arr2[j] < arr1[i]) {
        sortedArr.push(arr2[j]);
        j += 1;

    } else if(!arr1[i]) {
        sortedArr.push(arr2[j]);
        j += 1;

    } else if(!arr2[j]) {
        sortedArr.push(arr1[i]);
        i += 1;
    }
  }
  sortedArr.pop();

  return sortedArr;
}


console.log(MergeSort([12, 35, 4, 3, 72, 36, 16]));
