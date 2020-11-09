const randomStreamElement = () => {
  let streamCount = 0;
  let selected;

  const randStream = stream => {
    stream.map(item => {
      streamCount++;
      if (streamCount === 0) selected = item;
      if (Math.random() <= 1 / streamCount) selected = item;
    });
    return selected;
  };

  return randStream;
};

module.exports = randomStreamElement;
