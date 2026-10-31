import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var a = new Array(11)
    for (var i = 1; i <= 10; ++i) a[i] = false

    lines[0].split(" ").forEach(bi => {
	a[parseInt(bi)] = true
    })

    for (var i = 1; i <= 10; ++i) {
	if (!a[i]) {
	    console.log(i)
	    return
	}
    }
}

main(fs.readFileSync('/dev/stdin', 'utf8'));
