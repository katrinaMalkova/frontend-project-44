#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const generateRandomNumber = () => Math.floor(Math.random() * 100);
const askQuestion = (numder) => {
  console.log(`Question: ${numder}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (randomNumder, userAnswer) => {
  if ((isEven(randomNumder) && userAnswer === 'yes') || (!isEven(randomNumder) && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'`);
  return false;
};

const braineven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumder = generateRandomNumber();
    const userAnswer = askQuestion(randomNumder);
    const isCorrect = checkAnswer(randomNumder, userAnswer);
    if (!isCorrect) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default braineven();
