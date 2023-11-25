import AppError from '../errors/error.js';

class Validator {
  static validateUserNumbers(numbers) {
    const splittedNumber = numbers.split('').map(Number);
    const noDuplicateNumber = new Set(splittedNumber);

    this.checkNumber(splittedNumber);
    this.checkRange(splittedNumber);
    this.checkDuplicate(splittedNumber, noDuplicateNumber);
    this.checkSize(noDuplicateNumber);

    return splittedNumber;
  }

  static checkNumber(splittedNumber) {
    splittedNumber.forEach((num) => {
      if (isNaN(num)) {
        throw new AppError('[ERROR] 문자가 포함되어져 있습니다.');
      }
    });
  }

  static checkRange(splittedNumber) {
    const isValidRange = splittedNumber.every((num) => num >= 1 && num <= 9);
    if (!isValidRange) {
      throw new AppError('[ERROR] 0이 있으면 안 됩니다. 범위 체크해주세요.');
    }
  }

  static checkDuplicate(splittedNumber, noDuplicateNumber) {
    if (noDuplicateNumber.size !== splittedNumber.length) {
      throw new AppError('[ERROR] 중복이 있으면 안 됩니다.');
    }
  }

  static checkSize(noDuplicateNumber) {
    if (noDuplicateNumber.size !== 3) {
      throw new AppError('[ERROR] 세 자리 입력해주세요');
    }
  }
}

export default Validator;
