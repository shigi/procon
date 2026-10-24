fun main() {
    var l = readln().toInt()
    var m = readln().toInt()
    var n = readln().toInt()

    m += n / 25; n %= 25
    l += m /  4; m %=  4
    l %= 10

    println(l + m + n)
}
