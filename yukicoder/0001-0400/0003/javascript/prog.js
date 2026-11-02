import fs from 'node:fs'

function main(input) {
    const n = parseInt(input)
    var a = new Array(n + 1)
    var q = [{ dest: 1, walk: 1 }]

    for (var i = 0; i <= n; ++i)
        a[i] = n + 1

    while (q.length > 0) {
        var qi = q.shift()
        var curr = qi['dest']
        var walk = qi['walk']
        if (a[curr] <= walk)
            continue
        a[curr] = walk

        var b = curr.toString(2).split('').filter(c => c == '1').length
        if (curr - b >= 1)
            q.push({ dest: curr - b, walk: walk + 1 })
        if (curr + b <= n)
            q.push({ dest: curr + b, walk: walk + 1 })
    }

    console.log(a[n] == n + 1 ? -1 : a[n])
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
