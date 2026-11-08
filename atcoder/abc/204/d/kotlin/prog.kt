fun main() {
    val n = readln().toInt()
    val t = readln().split(" ").map { it.toInt() }
    val s = t.sum()

    val dp = Array(n + 1) { Array(s + 1) { false } }
    dp[0][0] = true

    for (i in 1..n) {
        for (j in 0..s) {
            if (j >= t[i-1]) {
                dp[i][j] = (dp[i-1][j-t[i-1]] || dp[i-1][j])
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    for (j in ((s+1)/2)..s) {
        if (dp[n][j]) {
            println(j)
            return
        }
    }
}
