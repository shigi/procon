val r = listOf(
    listOf("Drew", "Won" , "Lost"),
    listOf("Lost", "Drew", "Won" ),
    listOf("Won" , "Lost", "Drew"),
)

fun main() {
    val (n, k) = readln().split(" ").map { it.toInt() }
    println(r[n][k])
}
