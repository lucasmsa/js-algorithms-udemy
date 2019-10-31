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
  DFSTraversal(iter, visited);
  return visited;
}


function DFSTraversal(iter, visited){
  visited.push(iter.val);
  if(iter.left){ dfsTraversal(iter.left, visited) }
  if(iter.right){ dfsTraversal(iter.right, visited) }
}


function DFSPostOrder(tree){
  var iter = tree.root, visited = [];
  DFSTraversalPost(iter, visited);
  return visited;
}


function DFSTraversalPost(iter, visited){
  if(iter.left){ dfsTraversal(iter.left, visited) }
  if(iter.right){ dfsTraversal(iter.right, visited) }
  visited.push(iter.val);
}
