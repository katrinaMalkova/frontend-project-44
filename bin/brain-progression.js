#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { gameStart, lose } from '../src/index.js';

const progressMaxLen = 15;
const progressMinLen = 5;
const progressionMaxStep = 10;
const progressionMaxStart = 50;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateProgression = (start, len, step) => {
  const mass = [];
  for (let i = 0; i < len; i += 1) {
    mass.push(start + (i * step));
  }
  return mass;
};

const showProgression = (mass, index) => {
  let str = '';
  for (let i = 0; i < mass.length; i += 1) {
    if (i !== index) {
      str += `${mass[i]} `;
    } else {
      str += '.. ';
    }
  }
  return str;
};

function brainProgression() {
  const progressionStart = getRandomInt(0, progressionMaxStart);
  const progressionStep = getRandomInt(1, progressionMaxStep);
  const progressionLen = getRandomInt(progressMinLen, progressMaxLen);
  const hidden = getRandomInt(0, progressionLen - 1);
  const progression = generateProgression(progressionStart, progressionLen, progressionStep);
  const correctAnswer = progression[hidden];
  console.log('What number is missing in the progression?');
  console.log(`Question: ${showProgression(progression, hidden)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === correctAnswer) {
    return 1;
  }
  // eslint-disable-next-line no-use-before-define
  lose(userAnswer, correctAnswer, name);
  return 0;
}

const gameName = brainProgression;
const name = greetUser();
gameStart(name, gameName, 3);
