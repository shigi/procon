import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var n = parseInt(lines[0])
    var c = 0

    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2
        } else {
            n = (n - 1) / 2 + 1
        }
        c += 1
    }

    console.log(c)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
