import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const [n, m] = lines.shift().split(/\s+/).map(t => parseInt(t))

    var roads = new Array(n+1)
    for (var i = 0; i <= n; ++i)
        roads[i] = new Array()
    for (var i = 0; i < m; ++i) {
        const [a, b] = lines.shift().split(/\s+/).map(t => parseInt(t))
        roads[a].push(b)
    }

    var r = 0
    var visited = new Array(n+1)

    for (var i = 1; i <= n; ++i) {
        for (var e = 1; e <= n; ++e) {
            visited[e] = false
        }

        var q = [i]
        while (q.length > 0) {
            var e1 = q.shift()
            if (visited[e1])
                continue
            visited[e1] = true

            roads[e1].forEach((e2) => {
                if (!visited[e2])
                    q.push(e2)
            })
        }

        for (var v = 1; v <= n; ++v)
            if (visited[v])
                r += 1
    }

    console.log(r)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
