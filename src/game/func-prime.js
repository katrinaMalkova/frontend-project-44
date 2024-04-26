import { getRandomInt } from '../cli.js';
import { answerCheck, getAnswer } from '../gameBody.js';

const randMax = 100;
export const a = 3;
export const str = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (n) => {
  let isPrime = true;
  let i = 2;
  while (i <= Math.sqrt(n) && isPrime === true) {
    if (n % i === 0) {
      isPrime = false;
    }
    i += 1;
  }
  return isPrime ? 'yes' : 'no';
};

export const brainPrime = (name) => {
  const number = getRandomInt(0, randMax);
  let correctAnswer = '';
  if (number === 0 || number === 1) {
    correctAnswer = 'no';
  } else {
    correctAnswer = checkPrime(number);
  }
  const question = `${number}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
