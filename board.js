const chessBoard = (x, y) => {

  const data = {
    xPosition: x,
    yPosition: y,
    parent: null,
    board: null
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

  function createBoard() {
    data.board = [];
    for (i = 1; i <= 8; i++) {
      data.board.push(x);
    }
    data.board.map((x) => Array(8).fill(""));
  }

}