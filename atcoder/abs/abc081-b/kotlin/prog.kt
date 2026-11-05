fun main() {
    val n = readln().toInt()
    var a = readln().split(" ").map { it.toInt() }

    var c = 0
    while (a.all { it % 2 == 0 }) {
	a = a.map { it / 2 }
	c += 1
    }

    println(c)
}
