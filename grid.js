class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.gridArray = [];
    createGrid();
  }

  get GridArray() {
    return this.gridArray;
  }

  createGrid() {
    let node;
    for (let j = 0; j < this.height; j++) {
      for (let i = 0; i < this.width; i++) {
        node = new GridNode(i, j);
        this.gridArray.push(node);
      }
    }
  }
}
