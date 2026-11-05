import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var n = parseInt(lines[0])
    var a = lines[1].split(" ").map(t => parseInt(t)).sort((a, b) => b - a)

    var s = 0, t = 0
    for (var i = 0; i < n; ++i) {
        if (i % 2 == 0) {
            s += a[i]
        } else {
            t += a[i]
        }
    }

    console.log(s - t)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
