export function gameStart(name, gameName, repeats) {
  for (let i = 0; i < repeats; i += 1) {
    if (gameName(name) === 1) {
      console.log('Correct!');
    } else {
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 1;
}

export function lose(userAnswer, correctAnswer, name) {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${name}!`);
  return 0;
}
