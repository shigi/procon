import fs from 'node:fs'

function main(input) {
    var s = parseInt(input)
    console.log(s >= 200 && s <= 299 ? "Success" : "Failure")
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
