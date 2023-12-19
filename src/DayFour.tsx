import { input } from './DayFour/input'

type Card = {
  name: string
  winningNumbers: number[]
  inputNumbers: number[]
}

const cards = input.split('\n').map<Card>((line) => {
  const [name, numberStrings] = line.split(/:\s+/)
  const [winningString, inputString] = numberStrings.split(/\s+\|\s+/)

  return {
    name,
    winningNumbers: winningString.split(/\s+/).map((x) => parseInt(x)),
    inputNumbers: inputString.split(/\s+/).map((x) => parseInt(x)),
  }
})

function score(card: Card): number {
  const wins = card.inputNumbers.filter((inputNumber) =>
    card.winningNumbers.includes(inputNumber)
  ).length
  if (wins === 0) {
    return 0
  } else {
    return 2 ** (wins - 1)
  }
}

function scoreTwo(card: Card): number {
  const wins = card.inputNumbers.filter((inputNumber) =>
    card.winningNumbers.includes(inputNumber)
  ).length
  if (wins === 0) {
    return 0
  } else {
    return wins
  }
}

function countCards(cards: Card[]): [Card, number][] {
  const cardsAndCount: [Card, number][] = cards.map((c) => [c, 1])
  return cardsAndCount.map(([card, count], index, collection) => {
    const score = scoreTwo(card)
    if (score) {
      for (let i = 1; i <= score && i < collection.length; i++) {
        const [modCard, modCount] = collection[index + i]
        collection[index + i] = [modCard, modCount + 1 * count]
      }
    }

    return [card, count]
  })
}

const countedCards = countCards(cards)

export const DayFour = () => {
  return (
    <div>
      <h1>Part One</h1>
      <h2>Card Scores</h2>
      {cards.map((card) => (
        <div key={card.name}>
          {card.name}: {score(card)}
        </div>
      ))}
      <p>Result: {cards.reduce((sum, card) => sum + score(card), 0)}</p>

      <h1>Part Two</h1>
      <h2>Card Scores</h2>
      {countedCards.map(([card, count]) => (
        <div key={card.name}>
          {card.name}: {count}
        </div>
      ))}
      <p>Result: {countedCards.reduce((sum, [_c, count]) => sum + count, 0)}</p>
    </div>
  )
}
