import java.math.BigInteger

fun main() {
    var b0 = BigInteger.ZERO
    var b1 = BigInteger.ONE

    var (a, b, k) = readln().split(" ").map { it.toBigInteger() }

    val n = (a + b).toInt()
    val fact = Array<BigInteger>(n + 1) { 0.toBigInteger() }
    fact[0] = b1
    for (i in 1..n)
        fact[i] = fact[i-1] * i.toBigInteger()

    var ncr = fun(n: Int, r: Int, fact: Array<BigInteger>)
        = fact[n] / fact[r] / fact[n-r]

    var ans = ""
    while (a + b > b0) {
        if (a > b0) {
            var c = ncr((a-b1+b).toInt(), (a-b1).toInt(), fact)
            if (k <= c) {
                ans += "a"
                a -= b1

            } else {
                ans += "b"
                b -= b1
                k -= c
            }
        } else {
            ans += "b"
            b -= b1
        }
    }

    println(ans)
}
