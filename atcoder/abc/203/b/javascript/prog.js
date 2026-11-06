import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [n, k] = lines.shift().split(/\s+/).map(t => parseInt(t))

    var r = 0
    for (var i = 1; i <= n; ++i)
        for (var j = 1; j <= k; ++j)
            r += 100 * i + j

    console.log(r)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
