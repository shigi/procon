import kotlin.math.*

fun main() {
    val n = readln().toInt()

    var ct = 0
    var cx = 0
    var cy = 0
    for (i in 1..n) {
        var (t, x, y) = readln().split(" ").map { it.toInt() }
        if (t - ct < abs(x - cx) + abs(y - cy) || t % 2 != (x + y) % 2) {
            println("No")
            return
        }
        ct = t
        cx = x
        cy = y
    }

    println("Yes")
}
