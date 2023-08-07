function vai() {
    p = document.querySelector("p")
    x = 1
    y = 0
    c = 1
    do {
        p.innerHTML += `${x}, `
        c++
        y = x +y
        p.innerHTML += `${y}, `
        c++
        x = x + y

    } while (c < 30)
}