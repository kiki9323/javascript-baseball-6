import { MissionUtils } from '@woowacourse/mission-utils';

class AnswerGenerator {
  #answer;

  constructor() {
    this.#answer = [];
  }

  generateRandomNumber() {
    while (this.#answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
    return this.#answer;
  }

  getAnswer() {
    return this.generateRandomNumber();
  }
}

export default AnswerGenerator;
