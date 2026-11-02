import fs from 'node:fs'

function main(input) {
    var tokens = input.split(" ")
    var n = parseInt(tokens[0])
    var h = parseInt(tokens[1])
    var m = parseInt(tokens[2])
    var t = parseInt(tokens[3])
    var a = ((h * 60 + m) + (n - 1) * t) % 1440
    console.log(Math.floor(a / 60))
    console.log(a % 60)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
