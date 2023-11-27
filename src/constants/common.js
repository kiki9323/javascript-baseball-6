const range = Object.freeze({
  min: 1,
  max: 9,
  length: 3,
});

const choose = Object.freeze({
  retry: '1',
  quit: '2',
});

const status = Object.freeze({
  strikes: 3,
  balls: 0,
});

const COMMON = Object.freeze({
  range,
  choose,
  status,
});

export default COMMON;
