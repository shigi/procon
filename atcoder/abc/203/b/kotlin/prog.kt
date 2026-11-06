fun main() {
    val (n, k) = readln().split(" ").map { it.toInt() }

    var r = 0
    for (i in 1..n) {
        for (j in 1..k) {
            r += 100 * i + j
        }
    }

    println(r)
}
