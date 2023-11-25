import COMMON from '../constants/common.js';

class GameCompare {
  static compareWithUserAnswer(answer, userAnswer) {
    const result = { strikes: 0, balls: 0 };
    let isFlag = false;

    [...answer].forEach((digit, index) => {
      if (digit === userAnswer[index]) result.strikes += 1;
      else if (userAnswer.includes(digit)) result.balls += 1;
    });

    isFlag = result.strikes === COMMON.status.strikes && result.balls === COMMON.status.balls;

    return { result, isFlag };
  }
}

export default GameCompare;
