import fs from 'node:fs'

function main(input) {
    var lines = input.split("\n")
    var n = parseInt(lines.shift())
    var loggedIn = false
    var failed = 0

    for (var i = 0; i < n; ++i) {
        var s = lines.shift()
        switch (s) {
        case "login":
            loggedIn = true
            break
        case "logout":
            loggedIn = false
            break
        case "public":
            // always OK
            break
        case "private":
            if (!loggedIn) failed += 1
            break
        }
    }

    console.log(failed)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
