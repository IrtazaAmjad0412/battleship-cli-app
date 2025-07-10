function createGrid(size) {
  return Array(size)
    .fill(null)
    .map(() =>
      Array(size)
        .fill(null)
        .map(() => ({ value: "-", hit: false }))
    );
}

module.exports = createGrid;
