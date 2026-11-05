import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var n = parseInt(lines[0])
    var a = lines[1].split(" ").map((t) => parseInt(t))

    var c = 0
    while (a.filter((ai) => ai % 2 == 1).length == 0) {
	for (var i = 0; i < a.length; ++i)
	    a[i] /= 2
	c += 1
    }

    console.log(c)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
