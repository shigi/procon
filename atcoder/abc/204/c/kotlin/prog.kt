fun main() {
    val (n, m) = readln().split(" ").map { it.toInt() }

    var roads: Array<MutableList<Int>> = Array(n+1) { mutableListOf() }
    for (i in 0..<m) {
        val (a, b) = readln().split(" ").map { it.toInt() }
        roads[a] += b
    }

    var r = 0
    var visited = Array(n+1) { false }

    for (i in 1..n) {
        for (e in 1..n) {
            visited[e] = false
        }

        var q = mutableListOf(i)
        while (!q.isEmpty()) {
            var e1 = q.removeFirst()
            if (visited[e1])
                continue
            visited[e1] = true

            roads[e1].forEach { e2 -> if (!visited[e2]) q.add(e2) }
        }

        for (v in 1..n) {
            if (visited[v]) {
                r += 1
            }
        }
    }

    println(r)
}
