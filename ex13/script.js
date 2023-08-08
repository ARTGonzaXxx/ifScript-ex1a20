function vai() {
    p = ""
    p = document.querySelector("p")

    x = 1
    y = 0
    c = 1
    s = 0
    primo = 0

    do {
        s = 1
        primo = 0
        do {
            
                if (x % s == 0) {
                    primo++;
                }
                s++

        } while (s > x)

        if (primo == 2) {
            p.innerHTML += `<span style="color: green;">${x}, </span>`
        } else {
            if (x % 2 == 0) {
                p.innerHTML += `<span style="color: blue;">${x}, </span>`
            } else {
                p.innerHTML += `<span style="color: red;">${x}, </span>`
            }
        }

        c++
        y = x + y
        s = 1
        primo = 0
        do {
            
                if (y % s == 0) {
                    primo++;
                }
                s++
            

        } while (s > y)

        if (primo == 2) {
            p.innerHTML += `<span style="color: green;">${y}, </span>`
        } else {
        if (y % 2 == 0) {
            p.innerHTML += `<span style="color: blue;">${y}, </span>`
        } else {
            p.innerHTML += `<span style="color: red;">${y}, </span>`
        }
    }
        c++
        x = x + y

    } while (c < 30)
}
