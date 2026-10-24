fun main() {
    val line = readln()
    val (s, f) = line.split(" ").map { it.toInt() }
    println(s / f + 1)
}
