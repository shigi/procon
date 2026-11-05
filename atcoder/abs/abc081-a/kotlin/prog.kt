fun main() {
    val s = readln()
    var ct = 0
    s.forEach {
        if (it == '1')
            ++ct
    }
    println(ct)
}
