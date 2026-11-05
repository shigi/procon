fun main() {
    var a = readln().toInt()
    var (b, c) = readln().split(" ").map { it.toInt() }
    var s = readln()

    println("%d %s".format(a + b + c, s))
}
