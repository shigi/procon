fun main() {
    val (n, k) = readln().split(" ").map { it.toInt() }
    val a = Array(n+1) { 0L }

    if (n < k) {
        println("1")
        return
    }

    for (i in 0..<k)
        a[i] = 1

    a[k] = k.toLong()
    for (i in (k+1)..n)
        a[i] = (a[i-1] * 2 - a[i-1-k] + 1000000000) % 1000000000

    println(a[n])
}
