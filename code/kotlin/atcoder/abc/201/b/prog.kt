fun main() {
    val n = readln().toInt()
    val mounts = Array(n) {
        var (name, height) = readln().split(" ")
        Mount(name, height.toInt())
    }.sortedBy { it.height * (-1) }

    println(mounts[1].name)
}

data class Mount(val name: String, val height: Int)
