import { getAnswer, answerCheck } from '../gameBody.js';

export const str = 'What is the result of the expression?';

const randomOperation = () => {
  const operations = ['+', '-', ' * '];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const generateMathExpression = () => {
  const num1 = Math.floor(Math.random() * 101);
  const num2 = Math.floor(Math.random() * 101);
  const operator = randomOperation();
  return `${num1} ${operator} ${num2}`;
};

const calculateExpression = (expression) => {
  const allowedOperators = /^[+\- * /]. * $/;
  if (!allowedOperators.test(expression)) {
    throw new Error('Invalid expression');
  }
  const [num1, operator, num2] = expression.split('').reverse().join('').match(/\d+|[+\- * /]/g)
    .reverse();
  switch (operator) {
    case '+': return Number(num1) + Number(num2);
    case '-': return Number(num1) - Number(num2);
    case ' * ': return Number(num1) * Number(num2);
    case '/': return Number(num1) / Number(num2);
    default: throw new Error('Invalid operator');
  }
};

export const brainCalc = (PlayerName) => {
  const expression = generateMathExpression();
  const correctAnswer = calculateExpression(expression);
  const question = `${expression}`;
  const answer = getAnswer(question);
  return answerCheck(answer, correctAnswer, PlayerName);
};
