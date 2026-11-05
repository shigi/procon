import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var a = parseInt(lines[0])
    var b = parseInt(lines[1])
    var c = parseInt(lines[2])
    var x = parseInt(lines[3])

    var t = 0
    for (var na = 0; na <= a; ++na)
	for (var nb = 0; nb <= b; ++nb)
	    for (var nc = 0; nc <= c; ++nc)
		if (na*500 + nb*100 + nc*50 == x)
		    t += 1

    console.log(t)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
