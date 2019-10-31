class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}


class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val){
    var node = new Node(val);
    if(this.length == 0){
      this.first = node;
      this.last = this.first;
    }
    else{
      var oldFirst = this.first;
      this.first = node;
      node.next = oldFirst;
    }
    return ++this.length;
  }

  pop(){
    if(this.length == 0){ return null }
    var popped = this.first;
    if(this.length == 1){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return popped;
  }
}
