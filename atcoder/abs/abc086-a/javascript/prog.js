import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [a, b] = lines[0].split(/\s+/).map(t => parseInt(t))

    console.log(a % 2 == 0 || b % 2 == 0 ? "Even" : "Odd")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
