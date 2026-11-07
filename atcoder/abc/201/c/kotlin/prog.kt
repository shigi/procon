fun main() {
    val s = readln()

    var r = 0
    for (i in 0..9999) {
        val t = i.toString().padStart(4, '0')
        var failed = false
        for (j in 0..9) {
            val sj = j.toString()
            if (s[j] == 'o') {
                if (t.count { it == sj[0] } == 0) {
                    failed = true
                }
            } else if (s[j] == 'x') {
                if (t.count { it == sj[0] } > 0) {
                    failed = true
                }
            } else if (s[j] == '?') {
                // ok
            }
        }
        if (!failed)
            r += 1
    }

    println(r)
}
