import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var s = lines[0]

    while (s.length > 0) {
        if (s.slice(-5) == "dream") {
            s = s.slice(0, s.length - 5)
        } else if (s.slice(-7) == "dreamer") {
            s = s.slice(0, s.length - 7)
        } else if (s.slice(-5) == "erase") {
            s = s.slice(0, s.length - 5)
        } else if (s.slice(-6) == "eraser") {
            s = s.slice(0, s.length - 6)
        } else {
            console.log("NO")
            return
        }
    }

    console.log("YES")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
