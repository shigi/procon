fun main() {
    val (n, k) = readln().split(" ").map { it.toInt() }

    var friends = MutableList<HashMap<String, Int>>(0)
    for (i in (1..n)) {
        val (a, b) = readln().split(" ").map { it.toInt() }
        val map = HashMap<String, Int>()
        map["a"] = a
        map["b"] = b
        friends.add(map)
    }
    friends.sortBy { it["a"] }

    println(friends)
}
