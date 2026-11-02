fun main() {
    val (a, b) = readln().split(" ").map { it.toInt() }
    for (i in a..b)
        if (i % 3 == 0 || i.toString().contains('3'))
            println(i)
}
