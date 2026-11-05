import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const a = parseInt(lines[0])
    const tokens = lines[1].split(/\s+/).map(t => parseInt(t))
    const b = tokens[0], c = tokens[1]
    const s = lines[2]
    console.log(a + b + c, " ", s)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
