fun main() {
    val (x, y) = readln().split(" ").map { it.toInt() }

    if (x == y) {
        println(x)
    } else {
        var r = arrayOf(x, y)
        r.sort()

        if (r.contentEquals(arrayOf(0, 1)))
            println(2)
        else if (r.contentEquals(arrayOf(0, 2)))
            println(1)
        else if (r.contentEquals(arrayOf(1, 2)))
            println(0)
    }
}
