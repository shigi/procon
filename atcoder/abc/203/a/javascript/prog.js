import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [a, b, c] = lines.shift().split(/\s+/).map(t => parseInt(t))
    if (a == b)
        console.log(c)
    else if (b == c)
        console.log(a)
    else if (c == a)
        console.log(b)
    else
        console.log(0)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
