fun main() {
    val a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    val b = "abcdefghijklmnopqrstuvwxyz"
    val h = HashMap<Char, Char>()
    for (i in 0..<26) {
        h[a[i]] = b[i]
        h[b[i]] = a[i]
    }

    val s = readln()
    var r = ""
    for (c in s)
        r += h[c]

    println(r)
}
