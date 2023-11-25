import COMMON from '../constants/common.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class AnswerGenerator {
  static generateRandomNumber() {
    const answer = [];
    while (answer.length < COMMON.range.length) {
      const number = MissionUtils.Random.pickNumberInRange(COMMON.range.min, COMMON.range.max);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  static getAnswer() {
    return this.generateRandomNumber();
  }
}

export default AnswerGenerator;
