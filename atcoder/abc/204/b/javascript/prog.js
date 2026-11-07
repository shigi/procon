import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const n = parseInt(lines.shift())
    const a = lines.shift().split(/\s+/).map(t => parseInt(t))

    var r = 0
    for (var i = 0; i < a.length; ++i)
        if (a[i] > 10)
            r += a[i] - 10

    console.log(r)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
