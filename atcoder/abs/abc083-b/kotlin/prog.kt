fun sumd(x: Int): Int {
    var dx = x
    var r = 0
    while (dx > 0) {
	r += dx % 10
	dx /= 10
    }
    return r
}

fun main() {
    val (n, a, b) = readln().split(" ").map { it.toInt() }

    var s = 0
    for (i in 1..n) {
	val t = sumd(i)
	if (a <= t && t <= b) {
	    s += i
	}
    }

    println(s)
}
