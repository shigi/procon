fun main() {
    val (k, n, f) = readln().split(" ").map { it.toInt() }
    val a = readln().split(" ").map { it.toInt() }

    val t = a.sum()
    if (k * n >= t)
        println(k * n - t)
    else
        println(-1)
}
