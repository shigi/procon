fun main() {
    val (n, y) = readln().split(" ").map { it.toInt() }

    for (i in 0..n) {
        for (j in 0..n) {
	    val k = n - i - j
	    if (k < 0)
		continue
	    if (i * 10000 + j * 5000 + k * 1000 == y) {
		println("%d %d %d".format(i, j, k))
		return
            }
        }
    }

    println("%d %d %d".format(-1, -1, -1))
}
