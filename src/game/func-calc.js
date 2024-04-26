import { getRandomInt } from '../cli.js';
import { answerCheck, getAnswer } from '../gameBody.js';

const randMax = 25;
export const str = 'What is the result of the expression?';
export const a = 3;

const operations = ['+', '-', '*'];

export const brainCalc = (name) => {
  const [number1, number2] = [getRandomInt(0, randMax), getRandomInt(0, randMax)];
  const operation = getRandomInt(0, 2);
  let correctAnswer;
  switch (operation) {
    case 0:
      correctAnswer = number1 + number2;
      break;
    case 1:
      correctAnswer = number1 - number2;
      break;
    case 2:
      correctAnswer = number1 * number2;
      break;
    default:
      return 0;
  }
  const question = `${number1} ${operations[operation]} ${number2}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
