// Add new functions, variables here

function main(input) {

  let newInput = input.split(' ');

  let m = Number(newInput[0]);
  let n = Number(newInput[1]);
  const calFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }

    return result;
  }

  const calCombination = (n, k) => {
    return (calFactorial(n) / (calFactorial(k) * calFactorial(n - k)));
  }

  const calCaseOccurred = (m, n) => {
    let result = 0;
    for (let i = n; i <= m - 1; i++) {
      result += calCombination(13, i) * calCombination(39, m - i);
    }

    return result;
  }

  const calProbability = (m, n) => {
    const omega = calCombination(52, m, calFactorial);
    const caseOccurred = calCaseOccurred(m, n);

    return caseOccurred / omega;
  }

  console.log(calProbability(m, n).toFixed(2));
}

module.exports = main;