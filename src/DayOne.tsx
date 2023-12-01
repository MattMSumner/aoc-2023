import { input } from './DayOne/input';

const result = input.split("\n").map((string: String) => {
  const numbers = string.match(/(\d)/g)

  if (!numbers) {
    throw new Error('there were no numbers!');
  }

  const firstNumber = parseInt(numbers[0])
  const lastNumber = parseInt(numbers[numbers.length - 1])

  if (numbers.length === 1) {
    return firstNumber * 10 + firstNumber;
  } else {
    return firstNumber * 10 + lastNumber;
  }
})

export const DayOne = () => {
  return (
    <div>
      <h1>Part One</h1>
      <div>{result.join(' + ')} = {result.reduce((a, b) => a + b)}</div>
    </div>
  )
};
