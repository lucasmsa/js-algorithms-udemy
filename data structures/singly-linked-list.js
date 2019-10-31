class Node{
    constructor(val){
      this.val = val;
      this.next = null;
      this.previous = null;
    }
}

class SinglyLinkedList{

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var n = new Node(val);
    if(this.length === 0){
      this.head = n;
      this.tail = this.head;
    } else {
      this.tail.next = n;
      this.tail = n;
    }
    this.length++;
    return this;
  }

  pop(){
    if(this.length == 0){ return undefined }
    var newTail = this.head;
    while(newTail.next !== this.tail){
      newTail = newTail.next;
    }
    var popped = newTail.next;
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
      this.head = null;
      this.tail = null;
    }
    return popped;
  }

  shift(){
    if(this.length == 0){ return undefined }
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if(this.length == 0){
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val){
    var n = new Node(val), oldHead = this.head;
    if(this.length == 0){
      this.head = n;
      this.tail = this.tail;
    } else {
      this.head = n;
      n.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(val){
    var counter = 0, node = this.head;
    if(val < 0 ||  val >= this.length){ return undefined }
    while(counter !== val){
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, val){
    var oldNode = this.get(index);
    if(!oldNode){ return false }
    else{
      oldNode.val = val;
      return true;
      }
    }

    insert(index, val){
      if(index < 0 || index > this.length){ return false }
      else if(index === this.length){ return !!this.push(val) }
      else if(index === 0){ return !!this.unshift(val) }
      else{
        var newNode = new Node(val);
        var preNode = this.get(index-1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return true;
      }
    }

    remove(index){
      if(index < 0 || index > this.length){ return undefined }
      else if(index === this.length){ return this.pop() }
      else if(index === 0){ return this.shift() }
      else{
        var pre = this.get(index-1), removed = pre.next;
        pre.next = removed.next;
        this.length--;
        return removed;
      }
    }

    reverse(){
      if(this.length === 0){ return undefined }
      var temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      var counter = 0, next, previous = null;
      while(counter < this.length){
        next = temp.next;
        temp.next = previous;
        previous = temp;
        temp = next;
        counter++;
      }
      return this;
    }

    print(){
      var arr = [];
      var current = this.head;
      while(current){
        arr.push(current.val);
        current = current.next;
      }
      console.log(arr);
    }
  }



var link = new SinglyLinkedList;

link.push(32);
link.push(26);
link.push(3);
link.push(42);
link.push(72);
link.pop();

console.log("Link");
