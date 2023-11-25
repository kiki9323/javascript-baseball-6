import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printError(error) {
    this.print(error.message);
  },

  printInitMessage() {
    this.print(MESSAGES.output.init);
  },
};

export default OutputView;
