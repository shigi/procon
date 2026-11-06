fun main() {
    var s = readln()

    while (s.length > 0) {
        if (s.length >= 5 && s.substring(s.length - 5) == "dream")
	    s = s.substring(0, s.length - 5)
        else if (s.length >= 7 && s.substring(s.length - 7) == "dreamer")
	    s = s.substring(0, s.length - 7)
        else if (s.length >= 5 && s.substring(s.length - 5) == "erase")
	    s = s.substring(0, s.length - 5)
        else if (s.length >= 6 && s.substring(s.length - 6) == "eraser")
	    s = s.substring(0, s.length - 6)
        else {
	    println("NO")
	    return
        }
    }

    println("YES")
}
