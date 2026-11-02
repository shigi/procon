fun main() {
    val a = readln()
    val b = readln()

    if (a.toCharArray().sorted().joinToString() == b.toCharArray().sorted().joinToString())
        println("YES")
    else
        println("NO")
}
