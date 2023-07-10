class Node {
  constructor(x,y,dist, parent = null) {
    this.x = x,
    this.y = y,
    this.dist = dist,
    this.parent = parent
  }

}

  const possibleMoves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1]
  ]

function onBoard(x, y, n = 8) {
  if (x >= 0 && x < n && y >= 0 && y < n) return true;
  return false;
}

function knightMoves(initial, target) {
  let queue = [];

  // enqueue the initial node
  let initialNode = new Node(initial[0], initial[1], 0);
  queue.push(initialNode);

  let visit = [...Array(8)].map(() => Array(8).fill(0));
  visit[initial[0]][initial[1]] = 1;

  let current;
  let x, y;
  let path = [target];
  let previous;

  while (queue.length) {
    current = queue.shift();


    if (current.x === target[0] && current.y === target[1]) {
        previous = current.parent;
      for (let i = 0; i < current.dist; i++) {
        path.unshift([previous.x, previous.y]);
        previous = previous.parent;
      }
      
      console.log(path);
      return current.dist;
    }

    for (let i = 0; i < 8; i++) {
      x = current.x + possibleMoves[i][0];
      y = current.y + possibleMoves[i][1];

      if (onBoard(x,y) && visit[x][y] === 0) {
        visit[x][y] === 1;
        let child = new Node(x,y,current.dist + 1);
        child.parent = current;
        queue.push(child);
      } 
    }
  }

}

console.log(knightMoves([3,3], [0,0]));



// create an empty queue. Enqueue the source cell with a distance of 0
// from the source to itself.
// Look the queue until empty.
// enqueue the children - if one of them is the destination node, return
// its distance. Otherwise, mark as visited. Distance + 1
// https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/

// need to figure out a way to save the path, the parents

// just focus on finding the length of the shortest path first. And then
// we can worry about saving the parent to output what that path