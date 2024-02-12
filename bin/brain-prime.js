#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { gameStart, lose } from '../src/index.js';

function checkPrime(number) {
  if (number <= 1) {
    return 'no';
  } if (number === 2) {
    return 'yes';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

const generateMaxNumber = () => Math.floor(Math.random() * 200);

const brainPrime = () => {
  const randomNumber = generateMaxNumber();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = checkPrime(randomNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    return 1;
  }
  // eslint-disable-next-line no-use-before-define
  lose(userAnswer, correctAnswer, name);
  return 0;
};

const gameName = brainPrime;
const name = greetUser();
gameStart(name, gameName, 3);
