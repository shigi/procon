fun main() {
    val n = readln().toInt()
    var loggedIn = false

    var failed = 0
    for (i in 1..n) {
        val s = readln().trimEnd()
        if (s == "login") {
            loggedIn = true
        } else if (s == "logout") {
            loggedIn = false
        } else if (s == "public") {
            // always OK
        } else if (s == "private") {
            if (!loggedIn) ++failed
        }
    }

    println(failed)
}
