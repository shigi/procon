fun main() {
    val (a, b, c) = readln().split(" ").map { it.toInt() }

    if (a == b)
        println(c)
    else if (b == c)
        println(a)
    else if (c == a)
        println(b)
    else
        println(0)
}
