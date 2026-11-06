import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var ln = 0
    var n = parseInt(lines[ln++])

    var ct = 0
    var cx = 0
    var cy = 0
    for (var i = 0; i < n; ++i) {
	var [t, x, y] = lines[ln++].split(/\s+/).map((t) => parseInt(t))
        if (t - ct < Math.abs(x - cx) + Math.abs(y - cy) || t % 2 != (x + y) % 2) {
            console.log("No")
            return
        }
        ct = t
        cx = x
        cy = y
    }

    console.log("Yes")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
