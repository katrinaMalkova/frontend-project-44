import readlineSync from 'readline-sync';
import { User } from './cli.js';

export const brainGameStart = (str, gameName) => {
  const playerName = User();
  console.log(str);
  let correctCount = 0;
  while (correctCount < 3) {
    if (gameName(playerName) === 1) {
      correctCount += 1;
    } else return 0;
  }
  console.log(`Congratulations, ${playerName}!`);
  return 0;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

export const loseGame = (correctAnswer, answer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const answerCheck = (answer, correctAnswer, name) => {
  if ((typeof correctAnswer === 'number' ? parseInt(answer, 10) : answer) === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  loseGame(correctAnswer, answer, name);
  return 0;
};
