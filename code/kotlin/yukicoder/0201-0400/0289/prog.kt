fun main() {
    val line = readln()
    val s = line.split("")

    var sum = 0
    for (si in s) {
        if (si >= "1" && si <= "9")
            sum += si.toInt()
    }

    println(sum)
}
