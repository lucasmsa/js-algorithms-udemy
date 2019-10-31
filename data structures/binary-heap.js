function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(val){
    var index = this.values.length;
    var parent = Math.floor((index-1)/2);
    this.values.push(val);
    while(index > 0){
      if(val > this.values[parent]){
        swap(this.values, index, parent);
        index = parent;
        parent = Math.floor((index-1)/2);
      } else{ break }
    }
    return this.values;
  }

  extractMax(){
    swap(this.values, 0, this.values.length-1);
    var popped = this.values.pop();
    var index = 0, left, right, max;
    while(1) {
      left = 2*index + 1;
      right = 2*index + 2;

      if(left >= this.values.length || right >= this.values.length) break;

      if(this.values[left] > this.values[index] && this.values[right] > this.values[index]){
          if(this.values[left] > this.values[right]) max = left;
          else max = right;
          swap(this.values, max, index);
          index = max;
        }

      else if(this.values[left] > this.values[index]){
          swap(this.values, left, index);
          index = left;
        }

      else if(this.values[right] > this.values[index]){
          swap(this.values, right, index);
          index = rights;
        }
      else break;
    }
    return popped;
  }
}


var bh = new MaxBinaryHeap;
bh.insert(20);
bh.insert(10);
bh.insert(30);
bh.insert(40);
bh.insert(2);
bh.insert(5);
bh.insert(100);
bh.insert(32);
bh.insert(64);
bh.insert(28);
bh.insert(37);
