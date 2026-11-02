fun main() {
    val line1 = readln()
    val n = line1.toInt()
    val line2 = readln()
    val a = line2.split(" ").map { it.toInt() }.toTypedArray()
    a.sort()

    val h = n / 2
    if (n % 2 == 0) {
        println((a[h-1] + a[h]).toDouble() / 2)
    } else {
        println(a[h])
    }
}
