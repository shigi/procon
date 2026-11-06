import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const n = parseInt(lines[0])
    const a = [-1].concat(lines[1].split(/\s+/).map((t) => parseInt(t)))
    const b = [-1].concat(lines[2].split(/\s+/).map((t) => parseInt(t)))
    const c = [-1].concat(lines[3].split(/\s+/).map((t) => parseInt(t)))

    var t = new Array(n + 1)
    for (var i = 1; i <= n; ++i)
        t[i] = 0
    for (var i = 1; i <= n; ++i)
        t[a[i]] += 1

    var r = 0
    for (var j = 1; j <= n; ++j) {
        var f = b[c[j]]
        r += t[f]
    }

    console.log(r)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
