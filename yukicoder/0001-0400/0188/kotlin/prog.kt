fun main() {
    val days = listOf(-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    var a = 0
    for (m in 1..12) {
        for (d in 1..days[m]) {
            if (m == d / 10 + d % 10)
                ++a
        }
    }
    println(a)
}
