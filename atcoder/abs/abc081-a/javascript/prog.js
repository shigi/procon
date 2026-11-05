import fs from 'node:fs'

function main(input) {
    const line = input.split("\n")[0]
    console.log(line.split("").filter(c => c == '1').length)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
