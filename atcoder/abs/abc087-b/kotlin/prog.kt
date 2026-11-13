fun main() {
    val a = readln().toInt()
    val b = readln().toInt()
    val c = readln().toInt()
    val x = readln().toInt()

    var t = 0
    for (na in 0..a)
        for (nb in 0..b)
            for (nc in 0..c)
                if (na*500 + nb*100 + nc*50 == x)
                    t += 1

    println(t)
}
