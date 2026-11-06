import fs from 'node:fs'

function main(input) {
    const H = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' } 
    const lines = input.split("\n")
    const line = lines[0]
    console.log(line.split('').reverse().map((c) => H[c]).join(''))
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
