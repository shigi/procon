import fs from 'node:fs'

function main(input) {
    const lines = input.split("\n")
    const line = lines[0]
    var [a, b, k] = line.split(/\s+/).map((c) => BigInt(c))

    var n = a + b
    var fact = new Array(parseInt(n) + 1)
    fact[0] = BigInt(1)
    for (var i = 1; i <= n; ++i)
        fact[i] = fact[i-1] * BigInt(i)

    var ncr = (n, r, fact) => {
        return fact[n] / fact[r] / fact[n-r]
    }

    var ans = ""
    var b1 = BigInt(1)
    while (a + b > 0) {
        if (a > 0) {
            var c = ncr(a-b1+b, a-b1, fact)
            if (k <= c) {
                ans += 'a'
                a -= b1
            } else {
                ans += 'b'
                b -= b1
                k -= c
            }
        } else {
            ans += 'b'
            b -= b1
        }
    }

    console.log(ans)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
