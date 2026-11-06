import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var [n, y] = lines[0].split(" ").map(t => parseInt(t))

    for (var i = 0; i <= n; ++i) {
	for (var j = 0; j <= n; ++j) {
	    const k = n - i - j
            if (k < 0)
                continue
            if (i * 10000 + j * 5000 + k * 1000 == y) {
                console.log(i, " ", j, " ", k)
                return
            }
        }
    }

    console.log(-1, " ", -1, " ", -1)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
