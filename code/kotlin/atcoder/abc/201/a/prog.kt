fun main() {
    val line = readln()
    val a = line.split(" ").map { it.toInt() }.sorted()
    println(if (a[1] - a[0] == a[2] - a[1]) "Yes" else "No")
}
