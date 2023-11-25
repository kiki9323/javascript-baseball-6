import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const InputView = {
  async readLineAsync(message) {
    const input = Console.readLineAsync(message);
    return input;
  },

  async readNumber() {
    const input = Console.readLineAsync(MESSAGES.input.numbers);
    return input;
  },

  async readRetryOrQuit() {
    const input = Console.readLineAsync(MESSAGES.input.retryOrQuit);
    return input;
  },
};

export default InputView;
