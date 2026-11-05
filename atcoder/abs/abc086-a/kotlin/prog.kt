fun main() {
    var (a, b) = readln().split(" ").map { it.toInt() }

    println(if (a % 2 == 0 || b % 2 == 0) "Even" else "Odd")
}
