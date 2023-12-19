import { input } from './DayThree/input'

interface Part {
  partNumber: number
  x: number
  y: number
}

interface Sym {
  character: string
  x: number
  y: number
}

interface Elements {
  parts: Array<Part>
  symbols: Array<Sym>
}

let x = 0
let y = 0
let partString = ''
const matrix = input.split('').reduce(
  (elements: Elements, character: string) => {
    if (character.match(/\d/)) {
      partString = partString.concat(character)
    } else {
      if (partString.length !== 0) {
        elements.parts.push({
          partNumber: parseInt(partString),
          x: x - partString.length,
          y,
        })
        partString = ''
      }
      if (character !== '.' && character !== '\n') {
        elements.symbols.push({
          character,
          x,
          y,
        })
      }
    }

    x += 1

    if (character === '\n') {
      y += 1
      x = 0
    }

    return elements
  },
  { parts: [], symbols: [] }
)

function adjacent(part: Part, sym: Sym): Boolean {
  return (
    sym.x >= part.x - 1 &&
    sym.x <= part.x + part.partNumber.toString().length &&
    Math.abs(part.y - sym.y) <= 1
  )
}

const validParts = matrix.parts.filter((part) =>
  matrix.symbols.some((sym) => adjacent(part, sym))
)

const validGears = matrix.symbols.reduce<Array<[Sym, Part[]]>>(
  (collection, sym) => {
    const adjacentParts = matrix.parts.filter((part) => adjacent(part, sym))
    if (adjacentParts.length === 2) {
      collection.push([sym, adjacentParts])
    }
    return collection
  },
  []
)

console.log({ matrix, partString, x, y, validParts })

export const DayThree = () => {
  return (
    <div>
      <h1>Part One</h1>
      <h2>Valid Parts</h2>
      {validParts.map((part) => (
        <div key={part.partNumber}>
          {part.x}, {part.y} - {part.partNumber}
        </div>
      ))}
      <p>
        Result: {validParts.reduce((sum, part) => sum + part.partNumber, 0)}
      </p>

      <h1>Part Two</h1>
      <h2>Valid Gears</h2>
      {validGears.map(([gear, parts]) => (
        <div key={`${gear.x},${gear.y}`}>
          {gear.x}, {gear.y} - {parts[0].partNumber * parts[1].partNumber}
        </div>
      ))}
      <p>
        Result:{' '}
        {validGears.reduce(
          (sum, [_gear, parts]) =>
            sum + parts[0].partNumber * parts[1].partNumber,
          0
        )}
      </p>
    </div>
  )
}
