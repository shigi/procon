import fs from 'node:fs'

function main(input) {
    const [d, p] = input.split(/\s+/).map(t => parseInt(t))
    console.log(Math.floor((d * 100 + d * p) / 100))
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
