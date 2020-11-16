const roomsRequired = arr => {
  const start = {
    index: 0,
    times: [...arr].map(a => a[0]).sort((a, b) => (a < b ? -1 : 1)),
  };
  const end = {
    index: 0,
    times: [...arr].map(a => a[1]).sort((a, b) => (a < b ? -1 : 1)),
  };
  const rooms = {
    max: 0,
    current: 0,
  };
  while (start.index < start.times.length || end.index < end.times.length) {
    if (start.index >= start.times.length) break;

    if (start.times[start.index] < end.times[end.index]) {
      rooms.current++;
      start.index++;
    } else {
      rooms.current--;
      end.index++;
    }
    rooms.max = Math.max(rooms.max, rooms.current);
  }
  return rooms.max;
};

module.exports = roomsRequired;
