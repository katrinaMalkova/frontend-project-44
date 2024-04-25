#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Функция, которая проверяет, является ли число четным
const isEven = (num) => num % 2 === 0;

// Функция, которая генерирует случайное число от 0 до 99
const generateRandomNumber = () => Math.floor(Math.random() * 100);

// Функция, которая выводит число пользователю и запрашивает ответ
const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

// Функция, которая проверяет ответ пользователя на четность числа
const checkAnswer = (randomNumber, userAnswer) => {
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if ((isEven(randomNumber) && userAnswer === 'yes') || (!isEven(randomNumber) && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  return false;
};

// Функция, содержащая логику игры
const braineven = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber();
    const userAnswer = askQuestion(randomNumber);
    const isCorrect = checkAnswer(randomNumber, userAnswer);

    if (!isCorrect) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

// Вызов функции
braineven();
