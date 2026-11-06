import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    var li = 0

    const [n, k] = lines[li++].split(/\s+/).map(t => parseInt(t))

    var friends = []
    for (var i = 0; i < n; ++i) {
        const [a, b] = lines[li++].split(/\s+/).map((t) => parseInt(t))
        friends.push({ a: a, b: b })
    }
    friends.sort((s, t) => s.a - t.a)

    friends.push({ a: 10 ** 18 + 1, b: 0 })

    var p = 0
    var m = k
    var i = 0

    while (m > 0) {
        p += m
        m = 0
        while (friends[i].a <= p) {
            m += friends[i].b
            i += 1
        }
    }

    console.log(p)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
