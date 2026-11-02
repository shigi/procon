fun main() {
    var a = Array(11) { false }
    val b = readln().split(" ").map { it.toInt() }
    for (bi in b) {
        a[bi] = true
    }

    for (i in 1..10) {
        if (!a[i]) {
            println(i)
            return
        }
    }
}
