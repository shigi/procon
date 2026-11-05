import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var n = parseInt(lines[0])
    var d = []
    for (var i = 1; i <= n; ++i)
	d.push(parseInt(lines[i]))

    var h = {}
    for (var di of d)
        h[di] = true

    console.log(Object.keys(h).length)
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
