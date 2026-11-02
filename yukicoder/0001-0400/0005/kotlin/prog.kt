fun main() {
    val l = readln().toInt()
    val n = readln().toInt()
    val w = readln().split(" ").map { it.toInt() }.toTypedArray()
    w.sort()

    var used = 0
    var len = 0
    while (used < n && len < l) {
        len += w[used]
        if (len > l)
            break
        used += 1
    }

    println(used)
}
