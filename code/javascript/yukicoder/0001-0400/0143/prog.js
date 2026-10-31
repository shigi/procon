import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [k, n, f] = lines[0].split(/\s+/).map(t => parseInt(t))
    const a = lines[1].split(/\s+/).map(t => parseInt(t))

    var t = a.reduce((sum, ai) => sum + ai)
    if (k * n >= t)
	console.log(k * n - t)
    else
	console.log(-1)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
