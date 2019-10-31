class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }


  insert(val){
    var node = new Node(val);
    if(!this.root){ this.root = node }
    else {
      var iter = this.root;
      while(1){
        if(node.val == iter.val){ return undefined }
        if(node.val > iter.val){
            if(iter.right == null){
               iter.right = node;
               break;
             }  else {
              iter = iter.right;
              continue;
            }
          } else if(node.val < iter.val) {
              if(iter.left == null){
                iter.left = node;
                break;
              }
              else{ iter = iter.left }
            }
        }
    }
    return this;
  }


  find(val){
    if(this.root == null){ return false }
    var iter = this.root;
    while(1){
      if(iter.val == val){ return iter }
      if(val > iter.val){
        if(iter.right == null){ break }
        iter = iter.right;
        continue;
      }
      else if(val < iter.val){
        if(iter.left == null){ break }
        iter = iter.left;
      }
    }
    return false;
  }

}



function BFS(tree){
  var queue = [], visited = [], dequeued;
  queue.push(tree.root);
  while(queue.length){
    dequeued = queue.shift();
    visited.push(dequeued.val);
    if(dequeued.left){
      queue.push(dequeued.left);
    }
    if(dequeued.right){
      queue.push(dequeued.right);
    }
  }
  return visited;
}



function DFSPreOrder(tree){
  var iter = tree.root, visited = [];
  function DFSTraversal(iter, visited){
    visited.push(iter.val);
    if(iter.left){ DFSTraversal(iter.left, visited) }
    if(iter.right){ DFSTraversal(iter.right, visited) }
  }
  DFSTraversal(iter, visited);
  return visited;
}



function DFSPostOrder(tree){
  var iter = tree.root, visited = [];
  function DFSTraversal(iter, visited){
    if(iter.left){ DFSTraversal(iter.left, visited) }
    if(iter.right){ DFSTraversal(iter.right, visited) }
    visited.push(iter.val);
  }
  DFSTraversal(iter, visited);
  return visited;
}


function DFSInOrder(tree){
  var iter = tree.root, visited = [];
  function DFSTraversal(iter, visited){
    if(iter.left) DFSTraversal(iter.left, visited);
    visited.push(iter.val);
    if(iter.right) DFSTraversal(iter.right, visited);
  }
  DFSTraversal(iter, visited);
  return visited;
}

var bs = new BinarySearchTree;
bs.insert(20);
bs.insert(10);
bs.insert(30);
bs.insert(8);
bs.insert(12);
bs.insert(15);
bs.insert(42);


console.log(DFSInOrder(bs));

//         ROOT
//         (20)
//        /    \
//     (10)    (30)
//    /   \        \
//  (8)   (12)     (42)
//            \
//            (15)
