function vai () {
    p = document.querySelector("p")
    n1 = document.querySelector("#n1")
    n2 = document.querySelector("#n2")
    

    n1 = Number(n1.value)
    n2 = Number(n2.value)
    
    if (n1 > n2) {
        p.innerHTML = "O segundo número tem que ser maior que o primeiro, mude o valor do segundo número"
    } else {
        p.innerHTML = "Correto, o segundo número é maior que o primeiro"
    }
}