fun main() {
    val (a, b) = readln().split(" ").map { it.toInt() }
    val s = readln()
    println("%d %s".format(a+b, s))
}
