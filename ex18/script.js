function vai() {

    
    x = 0
    y = 0
    p = document.querySelector("p")
    do {
        x++
        do {
            y++
            p.innerHTML += `${x} x ${y} = ${x*y} <br/>`
            
            
        } while (y < 10)
        p.innerHTML += "<br/>"
        y = 0
    } while (x < 20)
}