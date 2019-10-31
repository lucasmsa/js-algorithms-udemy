export default class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


export default class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val){
    var node = new Node(val);
    if(this.length == 0){
      this.first = node;
      this.last = this.first;
    }
    else{
      this.last.next = node;
      this.last = node;
    }
    return ++this.length;
  }

  dequeue(){
    if(this.length == 0){ return null }
    if(this.length == 1){ this.tail = null }
    var oldFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return oldFirst;
  }

}
