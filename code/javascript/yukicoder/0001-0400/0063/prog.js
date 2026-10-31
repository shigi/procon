import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var [l, k] = lines[0].split(/\s+/).map(t => parseInt(t))
    if (l % (k * 2) == 0)
	console.log((Math.floor(l / (k * 2)) - 1) * k)
    else
	console.log(Math.floor(l / (k * 2)) * k)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
