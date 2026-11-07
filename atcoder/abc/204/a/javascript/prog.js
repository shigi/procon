import fs from 'node:fs'

function arrayEq(a, b) {
    if (a.length != b.length)
        return false
    for (var i = 0; i < a.length; ++i)
        if (a[i] != b[i])
            return false
    return true
}

function main(input) {
    const lines = input.split("\n")
    const [x, y] = lines.shift().split(/\s+/).map(t => parseInt(t))
    if (x == y) {
        console.log(x)
    } else {
        var r = [x, y].sort()
        if (arrayEq(r, [0, 1]))
            console.log(2)
        else if (arrayEq(r, [0, 2]))
            console.log(1)
        else if (arrayEq(r, [1, 2]))
            console.log(0)
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
