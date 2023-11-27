import GameController from './controller/GameController.js';
import View from './view/View.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController({
      view: new View(),
    });
  }

  async play() {
    await this.#gameController.runGame();
  }
}

export default App;
