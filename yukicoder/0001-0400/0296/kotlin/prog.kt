fun main() {
    val line = readln().split(" ").map { it.toInt() }.toTypedArray()
    val n = line[0]
    val h = line[1]
    val m = line[2]
    val t = line[3]
    val a = ((h * 60 + m) + (n - 1) * t) % 1440
    println(a / 60)
    println(a % 60)
}
