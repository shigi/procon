import kotlin.system.exitProcess

fun main() {
    var x = readln().toInt()
    var y = readln().toInt()
    val l = readln().toInt()

    var c = 0
    checkEnd(x, y, c)

    if (y > 0) {
        c += (y + l - 1) / l
        y = 0
    }

    checkEnd(x, y, c)
    c++

    if (x < 0)
        x = -x
    if (x > 0) {
        c += (x + l - 1) / l
        x = 0
    }

    checkEnd(x, y, c)
    c++

    if (y < 0) {
        c += (-y + l - 1) / l
        y = 0
    }

    println(c)
}

fun checkEnd(x: Int, y: Int, c: Int) {
    if (x == 0 && y == 0) {
        println(c)
        exitProcess(0)
    }
}
