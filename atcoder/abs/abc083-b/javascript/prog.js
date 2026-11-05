import fs from 'node:fs'

function sumd(x) {
    var r = 0
    while (x > 0) {
        r += x % 10
        x = Math.floor(x / 10)
    }
    return r
}

function main(input) {
    var lines = input.split("\n")
    var tokens = lines[0].split(/\s+/).map(t => parseInt(t))
    var n = tokens[0], a = tokens[1], b = tokens[2]

    var s = 0
    for (var i = 1; i <= n; ++i) {
        var t = sumd(i)
        if (a <= t && t <= b) s += i
    }

    console.log(s)
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
