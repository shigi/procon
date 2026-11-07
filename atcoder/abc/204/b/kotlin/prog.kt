fun main() {
    val n = readln().toInt()
    val a = readln().split(" ").map { it.toInt() }

    var r = 0
    for (ai in a) {
        if (ai > 10) {
            r += ai - 10
        }
    }

    println(r)
}
