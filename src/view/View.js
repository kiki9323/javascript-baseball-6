import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../lib/validators.js';

class View {
  #inputView = InputView;
  #outputView = OutputView;

  async readNumbers() {
    const numbers = await this.#inputView.readNumber();
    return Validator.validateUserNumbers(numbers);
  }

  async readRetryOrQuit() {
    const isReply = await this.#inputView.readRetryOrQuit();
    return isReply;
  }

  printError() {
    this.#outputView.printError();
  }

  printInitMessage() {
    this.#outputView.printInitMessage();
  }

  printEnd() {
    this.#outputView.printEnd();
  }

  printHitStrikes() {
    this.#outputView.printHitStrikes();
  }
}

export default View;
