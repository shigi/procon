import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [a, b, c] = lines.shift().split(/\s+/).map(t => parseInt(t))
    console.log((7 - a) + (7 - b) + (7 - c))
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
