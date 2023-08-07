function vai () {
    var p = document.querySelector("p")
    n =  document.querySelector("#n")
    n = Number(n.value)
    c = 0
    p.innerHTML = ""
    
    do {
        c++
        p.innerHTML += (`${n} x ${c} = ${n*c} <br>`)

    } while(c < 10)

}