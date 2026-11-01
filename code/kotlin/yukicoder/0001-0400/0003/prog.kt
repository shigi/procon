data class Cand(val dest: Int, val walk: Int)

fun main() {
    var n = readln().toInt()
    var a = Array(n + 1) { n + 1 }
    var q = mutableListOf(Cand(1, 1))

    while (q.size > 0) {
        var qi = q.removeAt(0)
        var curr = qi.dest
        var walk = qi.walk
        if (a[curr] <= walk)
            continue
        a[curr] = walk

        var b = curr.toString(2).toCharArray().count { it == '1' }
        if (curr - b >= 1)
            q.add(Cand(curr - b, walk + 1))
        if (curr + b <= n)
            q.add(Cand(curr + b, walk + 1))
    }

    if (a[n] == n + 1)
        println(-1)
    else
        println(a[n])
}
