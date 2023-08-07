function vai () {
    p = document.querySelector("p")
    n1 = document.querySelector("#n1")
    n2 = document.querySelector("#n2")
    n3 = document.querySelector("#n3")

    n1 = Number(n1.value)
    n2 = Number(n2.value)
    n3 = Number(n3.value)

    if(n1 < (n2 + n3) && n2 < (n1 + n3) && n3 < (n1 + n2)) {
        if(n1 == n2 && n2 == n3 && n3 == n1) {
            p.innerHTML = "EQUILATERO"
        } else if (n1 != n2 && n2 != n3 && n3 != n1) {
            p.innerHTML = "ESCALENO"
        } else {
            p.innerHTML = "ISÓCELES"
        }
    } else {
        p.innerHTML = "NÃO É UM TRIÂNGULO SEU INCOPETENTE"
    }
}