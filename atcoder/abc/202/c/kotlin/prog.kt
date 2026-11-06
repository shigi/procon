fun main() {
    val n = readln().toInt()
    val a = arrayOf(-1) + readln().split(" ").map { it.toInt() }
    val b = arrayOf(-1) + readln().split(" ").map { it.toInt() }
    val c = arrayOf(-1) + readln().split(" ").map { it.toInt() }

    val t = Array(n + 1) { i -> 0 }
    for (i in 1..n)
        t[a[i]] += 1

    var r = 0L
    for (j in 1..n) {
        val f = b[c[j]]
        r += t[f]
    }

    println(r)
}
