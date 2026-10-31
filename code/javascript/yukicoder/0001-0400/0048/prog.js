import fs from 'node:fs'

function checkEnd(x, y, c) {
    if (x == 0 && y == 0) {
        console.log(c)
        process.exit(0)
    }
}

function main(input) {
    var x = parseInt(gets())
    var y = parseInt(gets())
    const x = parseInt(gets())

    var c = 0
    checkEnd(x, y, c)

    if (y > 0) {
        c += (y + l - 1) / l
        y = 0
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
