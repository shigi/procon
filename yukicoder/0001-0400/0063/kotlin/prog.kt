fun main() {
    val (l, k) = readln().split(" ").map { it.toInt() }
    if (l % (k * 2) == 0)
        println((l / (k * 2) - 1) * k)
    else
        println((l / (k * 2)) * k)
}
