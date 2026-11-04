import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const n = parseInt(lines.shift())
    const mounts = lines.map((line) => {
        const tokens = line.split(" ")
        return { name: tokens[0], height: parseInt(tokens[1]) }
    }).sort((a, b) => b['height'] - a['height'])

    console.log(mounts[1]['name'])
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
