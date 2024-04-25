#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { gameStart, lose } from '../src/gameBody.js';

// Функция, которая находит наибольший общий делитель двух чисел
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

// Функция, которая генерирует случайное число от 1 до 100
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// Функция, содержащая логику игры нахождения наибольшего общего делителя двух чисел
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

// Присваиваем функцию brainGCD переменной gameName и вызываем функции приветствия и старта игры
const gameName = brainGCD;
const name = greetUser();
gameStart(name, gameName, 3);
