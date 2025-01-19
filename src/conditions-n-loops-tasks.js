function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

function canQueenCaptureKing(queen, king) {
  const sameRow = queen.x === king.x;
  const sameColumn = queen.y === king.y;
  const sameDiagonal =
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return sameRow || sameColumn || sameDiagonal;
}

function isIsoscelesTriangle(a, b, c) {
  const isValidTriangle =
    a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;

  if (!isValidTriangle) {
    return false;
  }

  return a === b || a === c || b === c;
}

function convertToRomanNumerals(num) {
  let result = '';
  let remaining = num;

  while (remaining >= 10) {
    result += 'X';
    remaining -= 10;
  }

  if (remaining >= 9) {
    result += 'IX';
    remaining -= 9;
  }

  if (remaining >= 5) {
    result += 'V';
    remaining -= 5;
  }

  if (remaining >= 4) {
    result += 'IV';
    remaining -= 4;
  }

  while (remaining >= 1) {
    result += 'I';
    remaining -= 1;
  }

  return result;
}

function convertNumberToString(numberStr) {
  const digitWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };
  let result = '';
  let index = 0;
  while (index < numberStr.length) {
    const char = numberStr[index];
    switch (char) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '-':
      case '.':
      case ',':
        if (result !== '') {
          result += ' ';
        }
        result += digitWords[char];
        break;
      default:
        break;
    }
    index += 1;
  }

  return result;
}

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

function getIndexOf(str, letter) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === letter) {
      return index;
    }
    index += 1;
  }

  return -1;
}

function isContainNumber(num, digit) {
  if (digit < 0 || digit > 9) {
    return false;
  }

  let remaining = Math.abs(num);

  while (remaining > 0) {
    const currentDigit = remaining % 10;
    if (currentDigit === digit) {
      return true;
    }
    remaining = Math.floor(remaining / 10);
  }

  return digit === 0 && num === 0;
}

function getBalanceIndex(arr) {
  const n = arr.length;

  let totalSum = 0;
  for (let i = 0; i < n; i += 1) {
    totalSum += arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < n; i += 1) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let left = 0;
  let right = size - 1;
  let top = 0;
  let bottom = size - 1;
  let num = 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        matrix[bottom][i] = num;
        num += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        matrix[i][left] = num;
        num += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

function rotateMatrix(matrix) {
  const matrixLength = matrix.length;
  const rotatedMatrix = matrix;
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  for (let i = 0; i < matrixLength; i = add(i, 1)) {
    for (let j = i; j < matrixLength; j = add(j, 1)) {
      const temp = rotatedMatrix[i][j];
      rotatedMatrix[i][j] = rotatedMatrix[j][i];
      rotatedMatrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrixLength; i = add(i, 1)) {
    let start = 0;
    let end = subtract(matrixLength, 1);
    while (start < end) {
      const temp = rotatedMatrix[i][start];
      rotatedMatrix[i][start] = rotatedMatrix[i][end];
      rotatedMatrix[i][end] = temp;
      start = add(start, 1);
      end = subtract(end, 1);
    }
  }

  return rotatedMatrix;
}

function sortByAsc(arr) {
  const arrCopy = arr;

  function partition(start, end) {
    const pivot = arrCopy[end];
    let i = start - 1;

    for (let j = start; j < end; j += 1) {
      if (arrCopy[j] <= pivot) {
        i += 1;
        const temp = arrCopy[i];
        arrCopy[i] = arrCopy[j];
        arrCopy[j] = temp;
      }
    }

    const temp = arrCopy[i + 1];
    arrCopy[i + 1] = arrCopy[end];
    arrCopy[end] = temp;

    return i + 1;
  }

  function sort(start, end) {
    if (start >= end) {
      return;
    }

    const pivotIndex = partition(start, end);
    sort(start, pivotIndex - 1);
    sort(pivotIndex + 1, end);
  }

  sort(0, arrCopy.length - 1);

  return arrCopy;
}

function shuffleChar(str, iterations) {
  if (iterations === 0 || str.length <= 2) {
    return str;
  }

  let result = str;
  for (let i = 1; i <= iterations; i += 1) {
    let evenChars = '';
    let oddChars = '';

    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        evenChars += result[j];
      } else {
        oddChars += result[j];
      }
    }

    result = evenChars + oddChars;
    if (result === str) return shuffleChar(str, iterations % i);
  }

  return result;
}

function getNearestBigger(number) {
  const digits = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    digits.push(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }

  digits.reverse();

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  let left = i + 1;
  let right = digits.length - 1;

  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left += 1;
    right -= 1;
  }

  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
