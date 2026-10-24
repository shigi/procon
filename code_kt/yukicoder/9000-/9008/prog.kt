fun main() {
    val n = readln().toInt()
    val a = readln().split(" ").map { it.toLong() }

    println(a.sum())
}
