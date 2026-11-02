import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const a = lines[0].split('').sort().join()
    const b = lines[1].split('').sort().join()
    console.log(a == b ? "YES" : "NO")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
