function vai () {
    var p = document.querySelector("p")
    c = 0
    
    do {
        c++
        p.innerHTML += (`5 x ${c} = ${5*c} <br>`)

    } while(c < 10)

}