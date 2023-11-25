import { Console } from '@woowacourse/mission-utils';

class GameResult {
  static #resultMessage = '';

  static processingResult(result) {
    const { strikes, balls } = result;

    if (balls > 0) this.#resultMessage = `${balls}볼`;
    if (strikes > 0)
      this.#resultMessage += (this.#resultMessage ? ' ' : '') + `${strikes}스트라이크`;
    this.#resultMessage = this.#resultMessage || '낫싱';

    this.showResult();
  }

  static showResult() {
    Console.print(this.#resultMessage);
  }
}
export default GameResult;
