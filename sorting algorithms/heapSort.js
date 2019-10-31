function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function HeapSort(array){
    let heapsize = array.length;
    BuildMaxHeap(array, heapsize);
    for (let j = heapsize-1; j > 0; j--){
        swap(array, 0, j);
        MaxHeapify(array, 0, j);
    }
    return array;
  }

function BuildMaxHeap(array, heapsize){
    for (let i = Math.floor(heapsize/2); i >= 0; i--){
        MaxHeapify(array, i, heapsize);
      }
}

function MaxHeapify(array, i, heapsize){
    let largest = i;
    let left = 2*i + 1;
    let right = 2*i + 2;

    if ((left < heapsize) && (array[left] > array[i])){
        largest = left;
    } if ((right < heapsize) && (array[right] > array[largest])){
        largest = right;
    } if (largest != i){
        swap(arr, largest, i);
        MaxHeapify(array, largest, heapsize);
    }
}


let arr = [14, 4, 5, 1, 32, 2, 12, 3, 13, 17];
console.log(HeapSort(arr));
