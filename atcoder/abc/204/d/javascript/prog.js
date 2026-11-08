import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const n = parseInt(lines.shift())
    const t = lines.shift().split(/\s+/).map(t => parseInt(t))

    const s = t.reduce((a, b) => a + b, 0)
    const dp = new Array(n + 1)
    for (var i = 0; i <= n; ++i) {
        dp[i] = new Array(s + 1)
        for (var j = 0; j <= s; ++j)
            dp[i][j] = false
    }
    dp[0][0] = true

    for (var i = 1; i <= n; ++i)
        for (var j = 0; j <= s; ++j)
            if (j >= t[i-1]) {
                dp[i][j] = dp[i-1][j-t[i-1]] | dp[i-1][j]
            } else {
                dp[i][j] = dp[i-1][j]
            }

    for (var j = Math.floor((s+1)/2); j <= s; ++j)
        if (dp[n][j]) {
            console.log(j)
            return
        }
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
