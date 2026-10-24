fun main() {
    var (d, p) = readln().split(" ").map { it.toInt() }
    println("%d".format((d * 100 + d * p) / 100))
}
