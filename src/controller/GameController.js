import AnswerGenerator from '../domain/AnswerGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import View from '../view/View.js';

class GameController {
  #view;
  #answerGenerator;
  #answer;

  constructor({ view }) {
    this.#view = view;
  }

  async runGame() {
    this.initMessage();
    await this.gameStart();
  }

  initMessage() {
    this.#view.printInitMessage();
  }

  async gameStart() {
    this.#answerGenerator = new AnswerGenerator();
    this.#answer = this.#answerGenerator.getAnswer();
    await this.playGameCycle();
  }

  async playGameCycle() {
    const validatedNumbers = await this.#view.readNumbers();

    const { result, isFlag } = this.compareWithUserAnswer(this.#answer, validatedNumbers);

    this.showResult(result);

    isFlag ? await this.hitSrikes() : await this.playGameCycle();
  }

  compareWithUserAnswer(answer, userAnswer) {
    const result = { strikes: 0, balls: 0 };
    let isFlag = false;

    [...answer].forEach((digit, index) => {
      if (digit === userAnswer[index]) result.strikes += 1;
      else if (userAnswer.includes(digit)) result.balls += 1;
    });

    isFlag = result.strikes === 3 && result.balls === 0;

    return { result, isFlag };
  }

  showResult(result) {
    const { strikes, balls } = result;
    let resultMessage = '';

    if (balls > 0) resultMessage = `${balls}볼`;
    if (strikes > 0) resultMessage += (resultMessage ? ' ' : '') + `${strikes}스트라이크`;
    resultMessage = resultMessage || '낫싱';

    Console.print(resultMessage);
  }

  async hitSrikes() {
    this.gameEnd();
    await this.chooseContinueOrQuit();
  }

  gameEnd() {
    Console.print('3개의 숫자를 모두 맞히셨습니다!');
  }

  async chooseContinueOrQuit() {
    const isReplay = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );

    switch (isReplay) {
      case '1': {
        await this.gameStart();
        break;
      }
      case '2': {
        Console.print('게임 종료');
        break;
      }
      default: {
        throw new Error('[ERROR] 올바른 선택을 입력하세요. 1 또는 2를 입력해주세요.');
      }
    }
  }
}

export default GameController;
