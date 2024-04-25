#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { gameStart, lose } from '../src/gameBody.js';

// Константы для настройки прогрессии
const progressMaxLen = 15;
const progressMinLen = 5;
const progressionMaxStep = 10;
const progressionMaxStart = 50;

// Функция, которая генерирует случайное целое число в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция, генерирующая прогрессию
const generateProgression = (start, len, step) => {
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    progression.push(start + (i * step));
  }
  return progression;
};

// Функция для отображения прогрессии с пропущенным элементом
const showProgression = (progression, hiddenIndex) => {
  let str = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== hiddenIndex) {
      str += `${progression[i]} `;
    } else {
      str += '.. ';
    }
  }
  return str;
};

// Функция для игры на определение пропущенного числа в прогрессии
function brainProgression(name) {
  const progressionStart = getRandomInt(0, progressionMaxStart);
  const progressionStep = getRandomInt(1, progressionMaxStep);
  const progressionLen = getRandomInt(progressMinLen, progressMaxLen);
  const hiddenIndex = getRandomInt(0, progressionLen - 1);
  const progression = generateProgression(progressionStart, progressionLen, progressionStep);
  const correctAnswer = progression[hiddenIndex];
  console.log('What number is missing in the progression?');
  console.log(`Question: ${showProgression(progression, hiddenIndex)}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === correctAnswer) {
    return 1;
  }

  lose(userAnswer, correctAnswer, name);
  return 0;
}

// Присваиваем функцию brainProgression переменной
// gameName и вызываем функции приветствия и старта игры
const gameName = brainProgression;
const name = greetUser();
gameStart(name, gameName, 3);
