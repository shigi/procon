import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const a = lines[0].split(/\s+/).map(t => parseInt(t)).sort((a, b) => b - a)
    if (a[1] - a[0] == a[2] - a[1])
        console.log("Yes")
    else
        console.log("No")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
