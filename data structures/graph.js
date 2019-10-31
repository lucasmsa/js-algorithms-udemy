class Graph {
  constructor(){
    this.adjList = {};
  }

  addVertex(v){
    if(v in this.adjList) return false;
    this.adjList[v] = [];
    return this.adjList;
  }

  addEdge(v1, v2){
    if(this.adjList[v1].includes(v2)) return false;

    if(v1 in this.adjList && v2 in this.adjList){
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1); 
        return this.adjList;
      }
    return false;
    }



  removeVertex(v){
    if (!(this.adjList[v])) return false;
    let size = this.adjList[v].length, i = 0;;
    for(let i = 0; i < size; i++) this.removeEdge(v, this.adjList[v][0]);
    delete this.adjList[v];
    return this.adjList;
  }


  removeEdge(v1, v2){
    if(!(this.adjList[v1].includes(v2))) return false;

    if(v1 in this.adjList && v2 in this.adjList){
      this.adjList[v1] = this.adjList[v1].filter( v => v !== v2);
      this.adjList[v2] = this.adjList[v2].filter( v => v !== v1);
      // this.adjList[v1].splice(index1, 1);
      // this.adjList[v2].splice(index2, 1);
      return this.adjList;
    }
    return false;
  }


  DFS_Recursive(v){
    var points = [], visited = {}, adj = this.adjList;
    function helper(v){
      if (!v) return 1;
      points.push(v);
      visited[v] = true;
        for (let i = 0; i < adj[v].length; i++){
          if (!(visited[adj[v][i]])) helper(adj[v][i]);
        }
    }
    helper(v);
    return points;
  }


  DFS_Iterative(v){
      var s = [], discovered = {}, next, results = [];
      s.push(v);
      discovered[v] = true;
      while(s.length){
        next = s.pop();
        results.push(next);
        // discovered[next] = true;
        // results.push(next);
        this.adjList[next].forEach( vertex => {
          if(!discovered[vertex]){
              discovered[vertex] = true;
              s.push(vertex);
            }
          });
      }

      return results;
    }

  BFS(v){
    var queue = [], discovered = {}, points = [], current;
    queue.push(v);
    discovered[v] = true;
    while(queue.length){
      current = queue.shift();
      points.push(current);
      this.adjList[current].forEach( vertex => {
        if(!discovered[vertex]){
          discovered[vertex] = true;
          queue.push(vertex);
        }
      });
    }
    return points;
  }

}


var g = new Graph;
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
