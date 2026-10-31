import fs from 'node:fs'

function main(input) {
    var sum = 0
    input.split('').forEach(si => {
	if (si >= '0' && si <= '9')
	    sum += parseInt(si)
    })
    console.log(sum)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
