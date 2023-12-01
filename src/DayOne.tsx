import { input } from './DayOne/input'

const findNumbers = (doc: string) =>
  doc.split('\n').map((string: String) => {
    const numbers = string.match(/(\d)/g)

    if (!numbers) {
      throw new Error('there were no numbers!')
    }

    const firstNumber = parseInt(numbers[0])
    const lastNumber = parseInt(numbers[numbers.length - 1])

    if (numbers.length === 1) {
      return firstNumber * 10 + firstNumber
    } else {
      return firstNumber * 10 + lastNumber
    }
  })

function replaceWord(string: String): String {
  const stuff = string.match(/one|two|three|four|five|six|seven|eight|nine/)

  if (stuff) {
    switch (stuff[0]) {
      case 'one':
        return replaceWord(string.replace(/one/, 'o1e'))
      case 'two':
        return replaceWord(string.replace(/two/, 't2o'))
      case 'three':
        return replaceWord(string.replace(/three/, 't3e'))
      case 'four':
        return replaceWord(string.replace(/four/, '4'))
      case 'five':
        return replaceWord(string.replace(/five/, '5e'))
      case 'six':
        return replaceWord(string.replace(/six/, '6'))
      case 'seven':
        return replaceWord(string.replace(/seven/, '7n'))
      case 'eight':
        return replaceWord(string.replace(/eight/, 'e8t'))
      case 'nine':
        return replaceWord(string.replace(/nine/, 'n9e'))
      default:
        return string
    }
  } else {
    return string
  }
}

const convertWordsToNumbers = (doc: string) =>
  doc.split('\n').map(replaceWord).join('\n')

const dayOneResult = findNumbers(input)
const dayTwoResult = findNumbers(convertWordsToNumbers(input))

export const DayOne = () => {
  return (
    <div>
      <h1>Part One</h1>
      <div>
        {dayOneResult.join(' + ')} = {dayOneResult.reduce((a, b) => a + b)}
      </div>

      <h1>Part Two</h1>
      <div>
        {dayTwoResult.join(' + ')} = {dayTwoResult.reduce((a, b) => a + b)}
      </div>
    </div>
  )
}
