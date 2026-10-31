import fs from 'node:fs'

function checkEnd(x, y, c) {
    if (x == 0 && y == 0) {
        console.log(c)
        process.exit(0)
    }
}

function main(input) {
    var lines = input.split("\n")
    var x = parseInt(lines[0])
    var y = parseInt(lines[1])
    const l = parseInt(lines[2])

    var c = 0
    checkEnd(x, y, c)

    if (y > 0) {
        c += Math.floor((y + l - 1) / l)
        y = 0
    }

    checkEnd(x, y, c)
    c += 1

    if (x < 0)
        x = -x
    if (x > 0) {
        c += Math.floor((x + l - 1) / l)
        x = 0
    }

    checkEnd(x, y, c)
    c += 1

    if (y < 0) {
        c += Math.floor((-y + l - 1) / l)
        y = 0
    }

    console.log(c)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
