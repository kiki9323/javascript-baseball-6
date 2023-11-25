import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validator from '../constants/validators.js';

class View {
  #inputView = InputView;
  #outputView = OutputView;

  async readNumbers() {
    const numbers = await this.#inputView.readNumber();
    return Validator.validateUserNumbers(numbers);
  }

  printError() {
    this.#outputView.printError();
  }

  printInitMessage() {
    this.#outputView.printInitMessage();
  }
}

export default View;
