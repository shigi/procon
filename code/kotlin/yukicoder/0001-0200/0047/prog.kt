fun main() {
    var n = readln().toInt()
    var c = 0
    while (n > 1) {
        if (n % 2 == 0) {
            n /= 2
        } else {
            n = (n - 1) / 2 + 1
        }
        c++
    }
    println(c)
}
