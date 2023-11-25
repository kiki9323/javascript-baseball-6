import AppError from '../errors/error.js';
import COMMON from '../constants/common.js';
import ERROR from '../constants/error.js';

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
        throw new AppError(ERROR.includesString);
      }
    });
  }

  static checkRange(splittedNumber) {
    const isValidRange = splittedNumber.every(
      (num) => num >= COMMON.range.min && num <= COMMON.range.max,
    );
    if (!isValidRange) {
      throw new AppError(ERROR.includesZero);
    }
  }

  static checkDuplicate(splittedNumber, noDuplicateNumber) {
    if (noDuplicateNumber.size !== splittedNumber.length) {
      throw new AppError(ERROR.noDuplicate);
    }
  }

  static checkSize(noDuplicateNumber) {
    if (noDuplicateNumber.size !== COMMON.range.length) {
      throw new AppError(ERROR.threeUnit);
    }
  }
}

export default Validator;
