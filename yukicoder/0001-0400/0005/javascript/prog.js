import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const l = parseInt(lines[0])
    const n = parseInt(lines[1])
    var w = lines[2].split(/\s+/).map(t => parseInt(t))
    w.sort((a, b) => a - b)

    var used = 0, len = 0
    while (used < n && len < l) {
        len += w[used]
        if (len > l)
            break
        used++
    }

    console.log(used)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
