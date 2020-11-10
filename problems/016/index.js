class Log {
  constructor() {
    this.array = [];
  }

  record(id) {
    this.array.push(id);
  }

  getLast(i = 0) {
    return this.array[this.array.length - i - 1];
  }
}

module.exports = Log;
