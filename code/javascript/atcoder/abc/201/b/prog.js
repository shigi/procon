import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var n = parseInt(lines.shift())

    var mounts = []
    for (var i = 0; i < n; ++i) {
        var t = lines.shift().split(/\s+/)
        mounts.push({ name: t[0], height: parseInt(t[1]) })
    }

    mounts.sort((a, b) => b.height - a.height)
    console.log(mounts[1].name)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
