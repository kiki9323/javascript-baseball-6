const input = Object.freeze({
  numbers: '숫자를 입력해주세요 : ',
  retryOrQuit: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const output = Object.freeze({
  init: '숫자 야구 게임을 시작합니다.\n',
  quit: '게임 종료',
  hitStrikes: '3개의 숫자를 모두 맞히셨습니다!',
});

const MESSAGES = Object.freeze({
  input,
  output,
});

export default MESSAGES;
