class Node {
  constructor(x,y,dist) {
    this.x = x,
    this.y = y,
    this.dist = dist
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

function onBoard(x,y, n = 8) {
  if (x >= 1 && x <= n && y >=1 && y <= n) return true;
  return false;
}

function knightMoves(initial, target) {
  let queue = [];

  // enqueue the initial node
  queue.push(new Node(initial[0], initial[1], 0));

  let visit = [...Array(8)].map(() => Array(8).fill(0));
  visit[initial[0]][initial[1]] = 1;

  let current;
  let x, y;

  while (queue.length) {
    current = queue.shift();

    if (current.x === target[0] && current.y === target[1]) {
      return current.dist;
    }

    for (let i = 0; i < 8; i++) {
      x = current.x + possibleMoves[i][0];
      console.log(x);
      y = current.y + possibleMoves[i][1];

      if (onBoard(x,y) && visit[x][y] === 0) {
        visit[x][y] === 1;
        queue.push(new Node(x,y,current.dist + 1));
      } 
    }
  }
}

console.log(knightMoves([0,0], [0,0]));

// const chessBoard = (x = 0, y = 0) => {

//   let xPosition = x;
//   let yPosition = y;
//   const size = 8;
//   let dist = 0;



//   const possibleMoves = [
//     [x + 1, y + 2],
//     [x + 1, y - 2],
//     [x - 1, y + 2],
//     [x - 1, y - 2],
//     [x + 2, y + 1],
//     [x + 2, y - 1],
//     [x - 2, y + 1],
//     [x - 2, y - 1]
//   ]

//   function createBoard() {
//     data.board = [];
//     for (i = 1; i <= 8; i++) {
//       data.board.push(x);
//     }
//     data.board.map((x) => Array(8).fill(""));
//   }

// }



// create an empty queue. Enqueue the source cell with a distance of 0
// from the source to itself.
// Look the queue until empty.
// enqueue the children - if one of them is the destination node, return
// its distance. Otherwise, mark as visited. Distance + 1
// https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/

// need to figure out a way to save the path, the parents

// just focus on finding the length of the shortest path first. And then
// we can worry about saving the parent to output what that path