function vai() {
    x = 0
    y = 0
    p = document.querySelector("p")
    do {
        x++
        do {
            y++
            if (x % 2 == 0) {
                p.innerHTML += `<span style="color:blue">${x} x ${y} = ${x*y} <br/></span>`
            } else {
                p.innerHTML += `<span style="color:red">${x} x ${y} = ${x*y} <br/></span>`
            }            
            
        } while (y < 10)
        p.innerHTML += "<br/>"
        y = 0
    } while (x < 20)
}
