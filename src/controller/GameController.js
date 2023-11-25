import AnswerGenerator from '../domain/AnswerGenerator.js';
import AppError from '../errors/error.js';
import COMMON from '../constants/common.js';
import ERROR from '../constants/error.js';
import GameCompare from '../domain/GameCompare.js';
import GameResult from '../domain/GameResult.js';

class GameController {
  #view;
  #answer;

  constructor({ view }) {
    this.#view = view;
  }

  async runGame() {
    this.#view.printInitMessage();
    await this.gameStart();
  }

  async gameStart() {
    this.#answer = AnswerGenerator.getAnswer();
    await this.playGameCycle();
  }

  async playGameCycle() {
    const validatedNumbers = await this.#view.readNumbers();
    const { result, isFlag } = GameCompare.compareWithUserAnswer(this.#answer, validatedNumbers);
    GameResult.processingResult(result);
    isFlag ? await this.chooseRetryOrQuit() : await this.playGameCycle();
  }

  async chooseRetryOrQuit() {
    this.#view.printHitStrikes();
    const isReplay = await this.#view.readRetryOrQuit();

    switch (isReplay) {
      case COMMON.choose.retry: {
        await this.gameStart();
        break;
      }
      case COMMON.choose.quit: {
        this.#view.printEnd();
        break;
      }
      default: {
        throw new AppError(ERROR.retryExeption);
      }
    }
  }
}

export default GameController;
