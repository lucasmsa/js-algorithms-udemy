class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}


class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var node = new Node(val);
    if(this.length === 0){
      this.head = node;
      this.tail = this.head;
    } else{
      var oldTail = this.tail;
      oldTail.next = node;
      this.tail = node;
      this.tail.next = null;
      this.tail.previous = oldTail;
    }
    this.length++;
    return this;
  }

  pop(){
    var popped = this.tail;
    if(this.length === 0){ return undefined }
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      popped.previous = null;
    }
    this.length--;
    return popped;
  }

  shift(){
    if(this.length === 0){ return undefined }
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      var oldHead = this.head;
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val){
    var node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = this.head;
    }
    else{
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length){ return undefined }
    var start_init = this.head, counter = 0;
    if(index <= this.length/2){
      start_init = this.head;
      while(counter !== index){
          start_init = start_init.next;
          counter++
      }
    }
    else{
      start_init = this.tail;
      counter = this.length-1;
      while(counter !== index){
          start_init = start_init.previous
          counter--;
      }
    }
    return start_init;
  }

  set(index, val){
    var bf_index = this.get(index);
    if(bf_index){
      bf_index.val = val;
      return true;
    }
    else{
      return false;
    }
  }

  insert(index, val){
    if(index < 0 || index > this.length){ return undefined }
    else if(index === 0){ return !!this.unshift(val) }
    else if(index === this.length){ return !!this.push(val) }
    else{
      var bf_node = this.get(index-1), node = new Node(val);
      node.next = bf_node.next;
      bf_node.next.previous = node;
      node.previous = bf_node;
      bf_node.next = node;
      this.length++;
      return true;
      }
    }

    remove(index){
      if(this.length === 0){ return undefined }
      else if(index === 0){ return this.shift() }
      else if(index === this.length-1 ){ return this.pop() }
      else{
        var bf_node = this.get(index-1), removed = bf_node.next;
        bf_node.next = bf_node.next.next;
        bf_node.next.previous = bf_node;
        removed.next = null;
        removed.previous = null;
        this.length--;
        return removed;
      }
    }

    reverse(){
      if(this.length === 0){ return undefined }
      else{
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null, next, counter = 0;
        while(counter < this.length){
          next = node.next;
          node.next = prev;
          node.prev = next;
          prev = node;
          node = next;
          counter++;
        }
      }
      return this;
    }

    print(){
      var arr = [], start = this.head;
      while(start !== this.tail){
        arr.push(start.val);
        start = start.next;
      }
      arr.push(this.tail.val);
      return arr;
    }
  }



var link = new DoublyLinkedList;

link.push(32);
link.push(26);
link.push(3);
link.push(42);
