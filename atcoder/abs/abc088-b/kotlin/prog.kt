fun main() {
    val n = readln().toInt()
    val a = readln().split(" ").map { it.toInt() }.toIntArray()

    a.sort()

    var s = 0
    var t = 0
    for (i in 0..<n) {
	if (i % 2 == 0)
	    s += a[n - 1 - i]
	else
	    t += a[n - 1 - i]
    }

    println(s - t)
}
