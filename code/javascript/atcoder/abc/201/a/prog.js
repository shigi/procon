import fs from 'node:fs'

function main(input) {
    var a = input.split(" ").map(t => parseInt(t))
    a = a.sort((u, v) => u - v)
    console.log(a[1] - a[0] == a[2] - a[1] ? "Yes" : "No")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
