fun main() {
    val n = readln().toInt()

    var h = HashSet<Int>()
    for (i in 1..n) {
        val di = readln().toInt()
        h.add(di)
    }

    println(h.size)
}
