function vai () {
    var p = document.querySelector("p")
    c = 0
    s = 0
    do {
        c++
        s += c

    } while(c < 100)

    p.innerHTML = s

}