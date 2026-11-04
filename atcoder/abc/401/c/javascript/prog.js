import fs from 'node:fs'

const M = 1000000000

function main(input) {
    var lines = input.split("\n")
    var [n, k] = lines[0].split(" ").map(t => parseInt(t))
    var a = new Array(n+1, 0)

    if (n < k) {
        console.log(1)
        return
    }

    for (var i = 0; i < k; ++i)
        a[i] = 1

    a[k] = k

    for (var i = k+1; i <= n; ++i)
        a[i] = (a[i-1] * 2 - a[i-1-k] + M) % M

    console.log(a[n])
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
