#!/usr/bin/env node
// @ts-expect-error
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { gameStart, lose } from '../src/index.js';

// @ts-expect-error
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// @ts-expect-error
const brainGCD = (name) => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = gcd(number1, number2).toString();
  if (userAnswer === correctAnswer) {
    return 1;
  }
  lose(userAnswer, correctAnswer, name);
  return 0;
};

const gameName = brainGCD;
const name = greetUser();
gameStart(name, gameName, 3);
