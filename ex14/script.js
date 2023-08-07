function vai () {
    p = document.querySelector("p")
    n1 = document.querySelector("#n1")
    n2 = document.querySelector("#n2")
    n3 = document.querySelector("#n3")

    n1 = Number(n1.value)
    n2 = Number(n2.value)
    n3 = Number(n3.value)

    

    if(n1 > n2 && n1 > n3) {
         maior = n1
         cat1 = n2
         cat2 = n3
    } else if(n2 > n1 && n2 > n3) {
         maior = n2
         cat1 = n1
         cat2 = n3
    } else if(n3 > n1 && n3 > n2) {
         maior = n3
         cat1 = n2
         cat2 = n1
    }

    if (maior * maior == cat1 * cat1 + cat2 * cat2) {
        p.innerHTML = "É um triângulo retângulo"
    } else {
        p.innerHTML = "Não é um triângulo retangulo"
    }
        
}