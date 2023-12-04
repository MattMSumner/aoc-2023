import { input } from './DayTwo/input'

type Color = 'red' | 'blue' | 'green'

interface Handful {
  red: number
  green: number
  blue: number
}

function colorAndNumber(input: string): { color: Color; amount: number } {
  const [stringAmount, color] = input.split(' ')
  if (!color) {
    throw new Error('must have a color')
  }
  const amount = parseInt(stringAmount)
  if (color === 'red') {
    return { color, amount }
  } else if (color === 'green') {
    return { color, amount }
  } else if (color === 'blue') {
    return { color, amount }
  } else {
    throw new Error('invalid color')
  }
}

function infoToHandful(handful: Handful, input: string) {
  const handfuls = input.split(', ')
  handfuls.reduce((thing, handful) => {
    const { color, amount } = colorAndNumber(handful)
    if (thing[color] < amount) {
      thing[color] = amount
    }
    return thing
  }, handful)
  return handful
}

const inputToObjects = input.split('\n').map((line) => {
  const [game, stuff] = line.split(': ')
  const map: Handful = { red: 0, green: 0, blue: 0 }
  const handful = stuff.split('; ').reduce(infoToHandful, map)
  const gameId = parseInt(game.split(' ')[1])
  return { gameId, handful }
})

function valid(handful: Handful): boolean {
  return handful.red <= 12 && handful.blue <= 14 && handful.green <= 13
}

function power(handful: Handful): number {
  return handful.red * handful.green * handful.blue
}

export const DayTwo = () => {
  return (
    <div>
      <p>12 red cubes, 13 green cubes, and 14 blue cubes</p>
      {inputToObjects.map(({ gameId, handful }) => (
        <div key={gameId}>
          <p>
            Game {gameId}: {valid(handful) ? 'possible' : 'impossible'}
          </p>
          <p>
            Green: {handful.green}, Red: {handful.red}, Blue: {handful.blue}
          </p>
          <p>Power: {power(handful)}</p>
        </div>
      ))}
      <h1>Part One</h1>
      Result:{' '}
      {inputToObjects
        .filter(({ handful }) => valid(handful))
        .reduce((sum, { gameId }) => sum + gameId, 0)}
      <h1>Part Two</h1>
      Result:{' '}
      {inputToObjects
        .map(({ handful }) => power(handful))
        .reduce((sum, power) => sum + power, 0)}
    </div>
  )
}
