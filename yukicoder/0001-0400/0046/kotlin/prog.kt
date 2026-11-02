fun main() {
    val (a, b) = readln().split(" ").map { it.toLong() }
    println((b + a - 1) / a)
}
