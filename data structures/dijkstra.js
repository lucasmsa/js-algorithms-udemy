class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(v){
    if(v in this.adjacencyList) return false;
    if(!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return this.adjacencyList;
  }


  addEdge(v1, v2, weight){

    if(v1 in this.adjacencyList && v2 in this.adjacencyList){
      if(v1 in this.adjacencyList[v2]) return false;
      this.adjacencyList[v1].push({vertex: v2, weight: weight});
      this.adjacencyList[v2].push({vertex: v1, weight: weight});
      return this.adjacencyList;
    }
    return false;
  }


  Dijkstra(start, finish){
    var pq = new PriorityQueue;
    var dist = {}, prev = {}, current, dequeued, node, candidate, path = [];

    for(let v in this.adjacencyList){
      if(v == start){
        dist[v] = 0;
        pq.enqueue(v, 0);
      } else {
        dist[v] = Infinity;
        pq.enqueue(v, Infinity);
      }
      prev[v] = null;
    }

    while (pq.values.length) {

      dequeued = pq.dequeue().val;
      if(dequeued == finish){

         while(prev[dequeued]){

           path.push(dequeued);
           dequeued = prev[dequeued]
         }
         break;
      }

      for(let adjNodes in this.adjacencyList[dequeued]){

            node = this.adjacencyList[dequeued][adjNodes];
            candidate = dist[dequeued] + node.weight;

            if(candidate < dist[node.vertex]){

              dist[node.vertex] = candidate;
              prev[node.vertex] = dequeued;
              pq.enqueue(node.vertex, candidate);

            }
          }

    }

    let ret = {Path: path.concat(start).reverse(), Distance: dist[finish]}
    return ret;
    }
  }

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

var g = new WeightedGraph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("B", "E", 3);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("F", "E", 1);
