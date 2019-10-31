function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, prior){
    var node = new Node(val, prior);
    var index = this.values.length;
    var parent = Math.floor((index-1)/2);
    this.values.push(node);
    while(index > 0){
      if(prior < this.values[parent].priority){
        swap(this.values, index, parent);
        index = parent;
        parent = Math.floor((index-1)/2);
      } else break;
    }
    return this.values;
  }

  dequeue(){
    swap(this.values, 0, this.values.length-1);
    var popped = this.values.pop();
    var index = 0, left, right, min;
    while(1) {
      left = 2*index + 1;
      right = 2*index + 2;

      if(left >= this.values.length || right >= this.values.length) break;

      if(this.values[left].priority < this.values[index].priority && this.values[right].priority < this.values[index].priority){
          if(this.values[left].priority < this.values[right].priority) min = left;
          else min = right;
          swap(this.values, min, index);
          index = min;
        }

      else if(this.values[left].priority < this.values[index].priority){
          swap(this.values, left, index);
          index = left;
        }

      else if(this.values[right].priority < this.values[index].priority){
          swap(this.values, right, index);
          index = right;
        }
        else break;
    }
    return popped;
  }
}

var bh = new PriorityQueue;
bh.enqueue("cancer", 0);
bh.enqueue("febre", 4);
bh.enqueue("tiro", 1);
bh.enqueue("facada", 1);
bh.enqueue("pneumonia", 2);
bh.enqueue("queimadura de terceiro grau", 0);
bh.enqueue("Virose", 4);
bh.enqueue("Gripe", 5);
