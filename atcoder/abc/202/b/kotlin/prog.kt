fun main() {
    val h = hashMapOf('0' to '0', '1' to '1', '6' to '9', '8' to '8', '9' to '6')
    val s = readln()
    val r = s.reversed().map { h[it] }.joinToString("")
    println(r)
}
