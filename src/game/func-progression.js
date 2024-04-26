import { getRandomInt } from '../cli.js';
import { answerCheck, getAnswer } from '../gameBody.js';

export const str = 'What number is missing in the progression?';
export const a = 3;
const progressionMaxLen = 15;
const progressionMinLen = 5;
const progressionMaxStep = 10;
const progressionMaxStart = 50;

const generateProgression = (start, len, step) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(start + (i * step));
  }
  return arr;
};

const printProgression = (arr, index) => {
  let str1 = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== index) str1 += `${arr[i]} `;
    else str1 += '.. ';
  }
  return str1;
};

export const brainProgression = (name) => {
  const progressionStart = getRandomInt(0, progressionMaxStart);
  const progressionStep = getRandomInt(1, progressionMaxStep);
  const progressionLen = getRandomInt(progressionMinLen, progressionMaxLen);
  const hidden = getRandomInt(0, progressionLen - 1);
  const progression = generateProgression(progressionStart, progressionLen, progressionStep);
  const correctAnswer = progression[hidden];
  const question = `${printProgression(progression, hidden)}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, name);
};
