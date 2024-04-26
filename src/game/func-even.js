import { getAnswer, answerCheck } from '../gameBody.js';

export const str = 'Answer "yes" if the number is even, otherwise answer "no".';

export function brainEven(playerName) {
  const number = Math.floor(Math.random() * 100);
  const question = `${number}`;
  const answer = getAnswer(question);
  let keyAswer;
  if (number % 2 === 0) {
    keyAswer = 'yes';
  } else {
    keyAswer = 'no';
  }
  return answerCheck(answer, keyAswer, playerName);
}
