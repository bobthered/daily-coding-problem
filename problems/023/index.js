const minSteps = (matrix, start, end) => {
  // check if start is end
  if (start[0] === end[0] && start[1] === end[1]) return 0;

  // function to check if space is valid
  const valid = (y, x) =>
    !(
      y < 0 ||
      x < 0 ||
      y >= matrix.length ||
      x >= matrix[0].length ||
      matrix[y][x] === 1
    );

  // initialize matrix possibilities
  const possibilities = [];

  // refactor start & end
  start = {
    y: start[0],
    x: start[1],
  };
  end = {
    y: end[0],
    x: end[1],
  };

  // add valid up, down, left & right possibilities
  if (valid(start.y - 1, start.x))
    possibilities.push([start.y - 1, start.x, 1]);
  if (valid(start.y + 1, start.x))
    possibilities.push([start.y + 1, start.x, 1]);
  if (valid(start.y, start.x - 1))
    possibilities.push([start.y, start.x - 1, 1]);
  if (valid(start.y, start.x + 1))
    possibilities.push([start.y, start.x + 1, 1]);

  // update matrix location
  matrix[start.y][start.x] = 1;

  // loop through possibilities
  while (possibilities.length !== 0) {
    // get a possibility
    let possibility = possibilities.shift();

    // refactor possibility
    possibility = {
      y: possibility[0],
      x: possibility[1],
      distance: possibility[2],
    };

    // check if at the end
    if (possibility.x === end.x && possibility.y === end.y)
      return possibility.distance;

    // check if out of bounds
    if (
      possibility.y < 0 ||
      possibility.x < 0 ||
      possibility.y >= matrix.length ||
      possibility.x >= matrix[0].length
    )
      continue;

    // check if a wall
    if (matrix[possibility.y][possibility.x] === 1) continue;

    // update matrix location
    matrix[possibility.y][possibility.x] = 1;

    // add valid up, down, left & right possibilities
    if (valid(possibility.y, possibility.x - 1))
      possibilities.push([
        possibility.y,
        possibility.x - 1,
        possibility.distance + 1,
      ]);
    if (valid(possibility.y, possibility.x + 1))
      possibilities.push([
        possibility.y,
        possibility.x + 1,
        possibility.distance + 1,
      ]);
    if (valid(possibility.y - 1, possibility.x))
      possibilities.push([
        possibility.y - 1,
        possibility.x,
        possibility.distance + 1,
      ]);
    if (valid(start.y + 1, start.x))
      possibilities.push([
        possibility.y + 1,
        possibility.x,
        possibility.distance + 1,
      ]);
  }

  // return -1 if there aren't any possibilities left
  return -1;
};

module.exports = minSteps;
