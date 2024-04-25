#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

// Массив операторов для калькулятора
const operators = ['+', '-', '*'];

// Функция для генерации случайного числа
const generateRandomNumber = () => Math.floor(Math.random() * 100);

// Функция для генерации случайного оператора
const generateRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

// Функция для вычисления результата выражения
const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

// Функция игры
export const brainCalc = () => {
  const name = greetUser(); // Приветствие пользователя
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const random1 = generateRandomNumber();
    const random2 = generateRandomNumber();
    const operator = generateRandomOperator();
    console.log(`Question: ${random1} ${operator} ${random2}`);
    const userAnswer = readlineSync.question('Your answer:'); // Запрос ответа у пользователя
    const rightAnswer = calculateExpression(random1, random2, operator);
    if (rightAnswer === parseInt(userAnswer, 10)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`); // Поздравление с окончанием игры
};

// Вызов функции
export default brainCalc();
