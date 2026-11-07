import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const s = lines[0]

    var r = 0
    for (var i = 0; i <= 9999; ++i) {
        var t = i.toString().padStart(4, "0")
        var failed = false
        for (var j = 0; j <= 9; ++j) {
            switch (s[j]) {
            case "o":
                if (!t.includes(j.toString()))
                    failed = true
                break
            case "x":
                if (t.includes(j.toString()))
                    failed = true
                break
            case "?":
                // through
            }
        }

        if (!failed)
            r += 1
    }

    console.log(r)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
