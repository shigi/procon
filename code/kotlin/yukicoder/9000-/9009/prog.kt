fun main() {
    val n = readln().toInt()
    val a = (1..n).map { readln().toLong() }

    println(a.sum())
}
