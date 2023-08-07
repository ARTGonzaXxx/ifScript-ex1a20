function vai () {
    var p = document.querySelector("p")
    var base = document.querySelector("#base")
    var altura = document.querySelector("#altura")
    base = base.value
    altura = altura.value
    var area = base * altura / 2 
    p.innerHTML = area
}